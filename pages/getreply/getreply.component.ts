import { Component, OnInit } from '@angular/core';
import { ReplyService } from '../../services/reply.service';

@Component({
  selector: 'app-getreply',
  templateUrl: './getreply.component.html',
  styleUrl: './getreply.component.css'
})
export class GetreplyComponent  implements OnInit {
  contacts: any[] = [];
  rid:any;
  constructor(private replyService: ReplyService ) { }

  ngOnInit(): void {
    this.rid = sessionStorage.getItem('userId');
    this.replyService.getAllReplyByRid(this.rid).subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.error('Error fetching contacts', error);
      }
    );
  }

}
