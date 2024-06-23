import { Component } from '@angular/core';
import { UpdateService } from '../../services/update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrl: './adminupdate.component.css'
})
export class AdminupdateComponent {
  constructor(private updateService:UpdateService,private snack:MatSnackBar){}
  public candidate={
    candid :'',
    name:'',
   
    address:'',
  
   
    email:'',
    phone:'',
}
formSubmit(){
  console.log(this.candidate);
 
 this.updateService.updateUser(this.candidate).subscribe(
  (data)=>{
     console.log(data);
   Swal.fire('Successfully Updated !! ','user is  updated','success');

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
