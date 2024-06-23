import { Component } from '@angular/core';
import { AdminService } from '../../services/adminlogin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  adminid:any;
  adminpassword: any;
  userExists: boolean = false;

  constructor(private adminService: AdminService,private router: Router,private snack:MatSnackBar) { }

  onSubmit(): void {
    this.adminService.getUserByEmail(this.adminid).subscribe(
      (user) => {
        if (user !== null) {
          this.userExists = true;
          console.log('User found:', user);
          sessionStorage.setItem('adminid', user.adminid);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('email', user.email);
          sessionStorage.setItem('phone', user.phone);
          sessionStorage.setItem('adminpassword', user.adminpassword);



          this.router.navigate(['/admindashboard']);
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
