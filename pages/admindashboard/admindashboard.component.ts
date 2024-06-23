import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  userCount: number = 0;
  employeeCount: number = 0;
adminCount : number=0;
employees: any[] = []; 
displayedColumns: string[] = ['Employee ID', 'Name', 'Email', 'Contact','Address'];
  dataSource = this.employees;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadCounts();
    this.loadEmployees();
  }
  
  loadCounts() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.userCount = users.length;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );

    this.userService.getAllEmployees().subscribe(
      employees => {
        this.employeeCount = employees.length;
      },
      error => {
        console.error('Error fetching employees', error);
      }
    );

    this.userService.getAllAdmins().subscribe(
      admins => {
        this.adminCount = admins.length;
      },
      error => {
        console.error('Error fetching employees', error);
      }
    );
  }
  loadEmployees() {
    this.userService.getAllEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.dataSource = employees;
      },
      error => {
        console.error('Error fetching employees', error);
      }
    );
  }


}
