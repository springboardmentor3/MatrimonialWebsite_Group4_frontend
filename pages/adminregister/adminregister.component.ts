import { Component } from '@angular/core';
import { AdminregisterService } from '../../services/adminregister.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
  constructor(private adminregisterService:AdminregisterService,private snack:MatSnackBar){}
  public candidate={
      name:'',
     
      address:'',
    
     
      email:'',
      phone:'',
  }
  formSubmit(){
    console.log(this.candidate);
   
   this.adminregisterService.addCandidate(this.candidate).subscribe(
    (data)=>{
       console.log(data);
     Swal.fire('Successfully Done !! ','user is registerd','success');

    },
    (error)=>{
      console.log(error);
      this.snack.open("Something went wrong!",'',{duration:3000,
        verticalPosition:'top',
       
      
       })
      

    }
    
   )
    
  }

  



}
