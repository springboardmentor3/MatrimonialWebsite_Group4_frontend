import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ContactadminserviceService } from '../../services/contactadminservice.service';
import Swal from 'sweetalert2';
// Adjust the import path as needed

@Component({
  selector: 'app-contactadmin',
  templateUrl: './contactadmin.component.html',
  styleUrls: ['./contactadmin.component.css']
})
export class ContactadminComponent {
  message: string = '';

  constructor(private contactadminService: ContactadminserviceService) {}

  sendMessage(event: Event) {
    event.preventDefault();

    const rid = sessionStorage.getItem('userId');
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const currentDate = new Date();
    const time = formatDate(currentDate, 'HH:mm:ss', 'en-US');
    const date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');

    const messageData = {
      id: Number(rid),
      name: name,
      email: email,
      time: time,
      date: date,
      message: this.message
    };

    this.contactadminService.addContact(messageData).subscribe(response => {
      console.log('Message sent successfully', response);
      Swal.fire('Successfully Done !! ','user is registerd','success');
      // You can also add some user feedback here
    }, error => {
      console.error('Error sending message', error);
    });
  }
}
