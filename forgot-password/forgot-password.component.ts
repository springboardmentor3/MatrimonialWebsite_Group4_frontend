// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2';
// import { UserService } from '../services/user.service';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent implements OnInit {
//   forgotPasswordForm: FormGroup;
//   verificationSent = false;
//   isCodeVerified = false;

//   constructor(private fb: FormBuilder, private http: HttpClient ,private userService : UserService) {}
//   ngOnInit() {
//     this.forgotPasswordForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       verificationCode: ['', Validators.required],
//       password1: ['', [Validators.required, Validators.minLength(8)]],
//       password2: ['', [Validators.required, Validators.minLength(8)]]
//     });
  

//     this.forgotPasswordForm.get('verificationCode')!.disable();
//     this.forgotPasswordForm.get('password1')!.disable();
//     this.forgotPasswordForm.get('password2')!.disable();
//   }
  
//   sendVerificationCode() {
//     this.http.post('http://localhost:8080/api/send-verification-email', { email: this.forgotPasswordForm.get('email')!.value })
//       .subscribe(
//         response => {
//           console.log('Verification email sent');
//           Swal.fire("Verification Code is sent to entered email");
//           this.verificationSent = true;
//           this.forgotPasswordForm.get('verificationCode')!.enable();
//         },
//         error => {
//           console.error('Error sending verification email', error);
//           Swal.fire('Error', 'Failed to send verification email. Please try again later.', 'error');
//         }
//       );
//   }
  
//   verifyCode() {
//     this.http.post<boolean>('http://localhost:8080/api/verify-code', { email: this.forgotPasswordForm.get('email')!.value, code: this.forgotPasswordForm.get('verificationCode')!.value })
//       .subscribe(
//         response => {
//           this.isCodeVerified = response;
//           if (response) {
//             Swal.fire('Code Verified', 'You can now reset your password', 'success');
//             this.forgotPasswordForm.get('password1')!.enable();
//             this.forgotPasswordForm.get('password2')!.enable();
//           } else {
//             Swal.fire('Invalid Code', 'Please enter the correct verification code', 'error');
//           }
//         },
//         error => {
//           console.error('Invalid verification code', error);
//           Swal.fire('Error', 'Invalid verification code', 'error');
//         }
//       );
//   }
  
//   onSubmit() {
//     if (this.forgotPasswordForm.get('password1')!.value !== this.forgotPasswordForm.get('password2')!.value) {
//       Swal.fire('Error', 'Passwords do not match', 'error');
//       return;
//     }
  
//     if (this.isCodeVerified && this.forgotPasswordForm.valid) {
//       const newPassword = this.forgotPasswordForm.get('password1')!.value;
//       const email = this.forgotPasswordForm.get('email')!.value; 
      
//       this.userService.updatePassword(email , newPassword).subscribe(
//         response => {
//           Swal.fire('Success', 'Password successfully changed!', 'success');
         
//         }
//       );
//     } else {
//       Swal.fire('Error', 'Please verify your email with the correct code', 'error');
//     }
//   }
  
// }
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2';
// import { UserService } from '../services/user.service';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent implements OnInit {
//   forgotPasswordForm: FormGroup;
//   verificationSent = false;
//   isCodeVerified = false;

//   constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {}

//   ngOnInit() {
//     this.forgotPasswordForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       verificationCode: ['', Validators.required],
//       password1: ['', [Validators.required, Validators.minLength(8)]],
//       password2: ['', [Validators.required, Validators.minLength(8)]]
//     }, { validators: this.passwordsMatchValidator });

//     // Disable verificationCode, password1, and password2 initially
//     this.forgotPasswordForm.get('verificationCode')!.disable();
//     this.forgotPasswordForm.get('password1')!.disable();
//     this.forgotPasswordForm.get('password2')!.disable();
//   }

//   passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
//     const password = control.get('password1');
//     const confirmPassword = control.get('password2');
//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//       return { 'passwordMismatch': true };
//     }
//     return null;
//   }

//   sendVerificationCode() {
//     this.http.post('http://localhost:8080/api/send-verification-email', { email: this.forgotPasswordForm.get('email')!.value })
//       .subscribe(
//         response => {
//           console.log('Verification email sent');
//           Swal.fire('Verification Code is sent to entered email');
//           this.verificationSent = true;
//           this.forgotPasswordForm.get('verificationCode')!.enable();
//         },
//         error => {
//           console.error('Error sending verification email', error);
//           Swal.fire('Error', 'Failed to send verification email. Please try again later.', 'error');
//         }
//       );
//   }

//   verifyCode() {
//     this.http.post<boolean>('http://localhost:8080/api/verify-code', { email: this.forgotPasswordForm.get('email')!.value, code: this.forgotPasswordForm.get('verificationCode')!.value })
//       .subscribe(
//         response => {
//           this.isCodeVerified = response;
//           if (response) {
//             Swal.fire('Code Verified', 'You can now reset your password', 'success');
//             this.forgotPasswordForm.get('password1')!.enable();
//             this.forgotPasswordForm.get('password2')!.enable();
//           } else {
//             Swal.fire('Invalid Code', 'Please enter the correct verification code', 'error');
//           }
//         },
//         error => {
//           console.error('Invalid verification code', error);
//           Swal.fire('Error', 'Invalid verification code', 'error');
//         }
//       );
//   }

//   onSubmit() {
//     if (this.isCodeVerified && this.forgotPasswordForm.valid) {
//       const newPassword = this.forgotPasswordForm.get('password1')!.value;
//       const email = this.forgotPasswordForm.get('email')!.value;

//       // Call the service to update the password
//       this.userService.updatePassword(email, newPassword).subscribe(
//         response => {
//           Swal.fire('Success', 'Password successfully changed!', 'success');
//         },
//         error => {
//           Swal.fire('Error', 'An error occurred while changing the password. Please try again.', 'error');
//         }
//       );
//     } else {
//       Swal.fire('Error', 'Please verify your email with the correct code', 'error');
//     }
//   }

//   get email() { return this.forgotPasswordForm.get('email'); }
//   get verificationCode() { return this.forgotPasswordForm.get('verificationCode'); }
//   get password1() { return this.forgotPasswordForm.get('password1'); }
//   get password2() { return this.forgotPasswordForm.get('password2'); }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  verificationSent = false;
  isCodeVerified = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      verificationCode: ['', Validators.required],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: this.passwordsMatchValidator });

    // Disable verificationCode, password1, and password2 initially
    this.forgotPasswordForm.get('verificationCode')!.disable();
    this.forgotPasswordForm.get('password1')!.disable();
    this.forgotPasswordForm.get('password2')!.disable();
  }

  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password1');
    const confirmPassword = control.get('password2');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  sendVerificationCode() {
    this.http.post('http://localhost:8080/api/send-verification-email', { email: this.forgotPasswordForm.get('email')!.value })
      .subscribe(
        response => {
          console.log('Verification email sent');
          Swal.fire('Verification Code is sent to entered email');
          this.verificationSent = true;
          this.forgotPasswordForm.get('verificationCode')!.enable();
        },
        error => {
          console.error('Error sending verification email', error);
          Swal.fire('Error', 'Failed to send verification email. Please try again later.', 'error');
        }
      );
  }

  verifyCode() {
    this.http.post<boolean>('http://localhost:8080/api/verify-code', { email: this.forgotPasswordForm.get('email')!.value, code: this.forgotPasswordForm.get('verificationCode')!.value })
      .subscribe(
        response => {
          this.isCodeVerified = response;
          if (response) {
            Swal.fire('Code Verified', 'You can now reset your password', 'success');
            this.forgotPasswordForm.get('password1')!.enable();
            this.forgotPasswordForm.get('password2')!.enable();
          } else {
            Swal.fire('Invalid Code', 'Please enter the correct verification code', 'error');
          }
        },
        error => {
          console.error('Invalid verification code', error);
          Swal.fire('Error', 'Invalid verification code', 'error');
        }
      );
  }

  onSubmit() {
    if (this.isCodeVerified && this.forgotPasswordForm.valid) {
      const newPassword = this.forgotPasswordForm.get('password1')!.value;
      const email = this.forgotPasswordForm.get('email')!.value;

      // Call the service to update the password
      this.userService.updatePassword(email, newPassword).pipe(
        finalize(() => {
          Swal.fire('Success', 'Password successfully changed!', 'success');
        })
      ).subscribe();
    } else {
      Swal.fire('Error', 'Please verify your email with the correct code', 'error');
    }
  }

  get email() { return this.forgotPasswordForm.get('email'); }
  get verificationCode() { return this.forgotPasswordForm.get('verificationCode'); }
  get password1() { return this.forgotPasswordForm.get('password1'); }
  get password2() { return this.forgotPasswordForm.get('password2'); }
}
