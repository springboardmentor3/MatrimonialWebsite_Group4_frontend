import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string='';
  userExists: boolean = false;

  constructor(private authService: AuthService,private router: Router,private snack:MatSnackBar) { }

  onSubmit(): void {
    this.authService.getUserByEmail(this.email).subscribe(
      (user) => {
        if (user !== null) {
          this.userExists = true;
          console.log('User found:', user);
          sessionStorage.setItem('userId', user.id);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('email', user.email);
          sessionStorage.setItem('phone', user.phone);
          sessionStorage.setItem('address', user.address);



          this.router.navigate(['/dashboard']);
        } else {
          this.userExists = false;
          console.log('User not found');
          
          this.snack.open("User not found!",'',{duration:3000,
            verticalPosition:'top',
           
          
           })
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
        // Handle error and display message to the user
      }
    );
  }

}
