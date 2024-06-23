// import { Component, OnInit } from '@angular/core';

// import { ContactadminserviceService } from '../../services/contactadminservice.service';

// @Component({
//   selector: 'app-getmessage',
//   templateUrl: './getmessage.component.html',
//   styleUrls: ['./getmessage.component.css']
// })
// export class GetmessageComponent implements OnInit {
//   contacts: any[] = [];
//   replyFormIndex: number | null = null;
//   replyMessage: string = '';

//   constructor(private contactAdminService: ContactadminserviceService) { }

//   ngOnInit(): void {
//     this.contactAdminService.getAllContacts().subscribe(
//       data => {
//         this.contacts = data;
//       },
//       error => {
//         console.error('Error fetching contacts', error);
//       }
//     );
//   }

//   toggleReplyForm(index: number): void {
//     this.replyFormIndex = this.replyFormIndex === index ? null : index;
//   }

//   sendReply(contactId: number): void {

//     console.log(`Reply to contact ID ${contactId}: ${this.replyMessage}`);

//     this.replyMessage = '';
//     this.replyFormIndex = null;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ContactadminserviceService } from '../../services/contactadminservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getmessage',
  templateUrl: './getmessage.component.html',
  styleUrls: ['./getmessage.component.css']
})
export class GetmessageComponent implements OnInit {
  contacts: any[] = [];
  replyFormIndex: number | null = null;
  replyMessage: string = '';

  constructor(private contactAdminService: ContactadminserviceService) { }

  ngOnInit(): void {
    this.contactAdminService.getAllContacts().subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.error('Error fetching contacts', error);
      }
    );
  }

  toggleReplyForm(index: number): void {
    this.replyFormIndex = this.replyFormIndex === index ? null : index;
  }

  sendReply(contact: any): void {
    if (this.replyMessage.trim()) {
      this.contactAdminService.sendReply(contact.id, this.replyMessage, contact).subscribe(
        response => {
          console.log('Reply sent successfully:', response);
          Swal.fire('Successfully Done !! ','Reply Sent Successfully','success');
          this.replyMessage = '';
          this.replyFormIndex = null;
        },
        error => {
          console.error('Error sending reply:', error);
        }
      );
    }
  }
}

