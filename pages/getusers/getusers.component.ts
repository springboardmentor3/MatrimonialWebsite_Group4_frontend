import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ContactadminserviceService } from '../../services/contactadminservice.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrl: './getusers.component.css'
})
export class GetusersComponent {
  contacts: any[] = [];
  replyFormIndex: number | null = null;
  replyMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.error('Error fetching contacts', error);
      }
    );
  }

  deleteUser(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
      // If you have a backend, you should also send a request to delete the user from the server
      this.userService.deleteUser(id).subscribe(response => {
        Swal.fire('Successfully Done !! ','User Deleted Successfully','success');
        console.log('User deleted:', response);
      });
    }
  }

  // toggleReplyForm(index: number): void {
  //   this.replyFormIndex = this.replyFormIndex === index ? null : index;
  // }

  // sendReply(contact: any): void {
  //   if (this.replyMessage.trim()) {
  //     this.contactAdminService.sendReply(contact.id, this.replyMessage, contact).subscribe(
  //       response => {
  //         console.log('Reply sent successfully:', response);
  //         Swal.fire('Successfully Done !! ','Reply Sent Successfully','success');
  //         this.replyMessage = '';
  //         this.replyFormIndex = null;
  //       },
  //       error => {
  //         console.error('Error sending reply:', error);
  //       }
  //     );
  //   }
  // }

}
