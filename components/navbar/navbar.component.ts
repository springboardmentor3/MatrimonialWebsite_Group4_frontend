// import { Component, OnInit } from '@angular/core';
// // import { ReplyService } from './reply.service';
// import Swal from 'sweetalert2';
// import { ReplyService } from '../../services/reply.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   newReplyNotification = false;

//   constructor(private replyService: ReplyService) {}

//   ngOnInit(): void {
//     const ridStr = sessionStorage.getItem('userId');
//     const rid = ridStr ? Number(ridStr) : null;
//     if (rid) {
//       this.replyService.checkForNewReplies(rid).subscribe(response => {
//         console.log(response);
//         if (!response.hasNewReplies ) {
//           this.newReplyNotification = true;
//           this.showNewReplyToast();
//         }
//       });
//     }
//   }

//   showNewReplyToast(): void {
//     Swal.fire({
//       title: 'New Notification',
//       text: 'You have a new reply from admin!',
//       icon: 'info',
//       timer: 5000,
//       showConfirmButton: false
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReplyService } from '../../services/reply.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  newReplyNotification = false;

  constructor(private replyService: ReplyService) {}

  ngOnInit(): void {
    const ridStr = sessionStorage.getItem('userId');
    const rid = ridStr ? Number(ridStr) : null;
    if (rid) {
      this.checkForNewReplies(rid);
    }
  }

  checkForNewReplies(rid: number): void {
    this.replyService.getAllReplyByRid(rid).subscribe(replies => {
      const previousReplyCount = Number(sessionStorage.getItem('previousReplyCount')) || 0;
      const currentReplyCount = replies.length;
      console.log(previousReplyCount);
      console.log(currentReplyCount);
      if (currentReplyCount > previousReplyCount) {
        this.newReplyNotification = true;
        this.showNewReplyToast();
        sessionStorage.setItem('previousReplyCount', currentReplyCount.toString());
      }
    });
  }

  showNewReplyToast(): void {
    Swal.fire({
      title: 'New Notification',
      text: 'You have a new reply from admin!',
      icon: 'info',
      timer: 5000,
      showConfirmButton: false
    });
  }
}

