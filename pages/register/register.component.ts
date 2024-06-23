import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isVerified: boolean = false;
  myForm: FormGroup;

  constructor(
    private userService: UserService,
    private snack: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: [{ value: '', disabled: true }, Validators.required],
      phone: [{ value: '', disabled: true }, [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      password: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(8)]],
      guests: [{ value: '', disabled: true }, [Validators.required, Validators.min(1), Validators.max(100)]],
      date: [{ value: '', disabled: true }, Validators.required],
      code: [{ value: '', disabled: true }, Validators.required]
    });

    // Subscribe to form control changes to enable/disable succeeding fields
    this.myForm.get('name')!.valueChanges.subscribe(value => this.toggleField('name', 'address'));
    this.myForm.get('address')!.valueChanges.subscribe(value => this.toggleField('address', 'phone'));
    this.myForm.get('phone')!.valueChanges.subscribe(value => this.toggleField('phone', 'email'));
    this.myForm.get('email')!.valueChanges.subscribe(value => this.toggleField('email', 'password'));
    this.myForm.get('password')!.valueChanges.subscribe(value => this.toggleField('password', 'guests'));
    this.myForm.get('guests')!.valueChanges.subscribe(value => this.toggleField('guests', 'date'));
    this.myForm.get('date')!.valueChanges.subscribe(value => this.toggleField('date', 'code'));
  }

  toggleField(currentField: string, nextField: string) {
    if (this.myForm.get(currentField)!.valid) {
      this.myForm.get(nextField)!.enable();
    } else {
      this.myForm.get(nextField)!.disable();
    }
  }

  sendVerificationEmail() {
    this.http.post('http://localhost:8080/api/send-verification-email', { email: this.myForm.get('email')!.value })
      .subscribe(
        response => {
          console.log('Verification email sent');
          Swal.fire("Verification Code is sent to entered email");
        },
        error => {
          console.error('Error sending verification email', error);
        }
      );
  }

  verifyCode() {
    this.http.post<boolean>('http://localhost:8080/api/verify-code', { email: this.myForm.get('email')!.value, code: this.myForm.get('code')!.value })
      .subscribe(
        response => {
          this.isVerified = response;
        },
        error => {
          this.isVerified = false;
          console.error('Invalid verification code', error);
        }
      );
  }

  formSubmit() {
    if (this.isVerified && this.myForm.valid) {
      this.saveUserData();
      console.log('Form submitted:', this.myForm.value);
    } else {
      console.error('Email not verified or form is invalid');
    }
  }

  saveUserData() {
    if (this.isVerified) {
      const userData = this.myForm.value;
      delete userData.code; // Remove verification code from user data

      this.http.post('http://localhost:8080/user/', userData).subscribe(
        response => {
          console.log('User data saved successfully');
          Swal.fire('Successfully Done !! ', 'User is registered', 'success');
        },
        error => {
          console.error('Error saving user data', error);
        }
      );
    } else {
      console.error('Email not verified');
    }
  }
}
