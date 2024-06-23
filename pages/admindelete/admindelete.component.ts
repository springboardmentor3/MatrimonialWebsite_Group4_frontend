import { Component } from '@angular/core';
import { DeleteService } from '../../services/delete.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindelete',
  templateUrl: './admindelete.component.html',
  styleUrl: './admindelete.component.css'
})
export class AdmindeleteComponent {
  constructor(private deleteService: DeleteService, private snack: MatSnackBar) {}

  public candidate = {
    candid: ''
  };

  formSubmit() {
    const candid = Number(this.candidate.candid);
    if (!candid) {
      this.snack.open('Invalid candidate ID!', '', { duration: 3000, verticalPosition: 'top' });
      return;
    }

    console.log(candid);

    this.deleteService.deleteCandidate(candid).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Successfully Done!!', 'Candidate has been deleted', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong!', '', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }

}
