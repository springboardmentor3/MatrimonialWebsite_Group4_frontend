import { Component } from '@angular/core';
import { ReplyService } from '../../services/reply.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-getfavourites',
  templateUrl: './getfavourites.component.html',
  styleUrl: './getfavourites.component.css'
})
export class GetfavouritesComponent {
  contacts: any[] = [];
  rid:any;
  constructor(private requestService: RequestService ) { }

  ngOnInit(): void {
    this.rid = sessionStorage.getItem('userId');
    this.requestService.getProfilesBysendRecrid1().subscribe(
      data => {
        this.contacts = data;
      },
      error => {
        console.error('Error fetching contacts', error);
      }
    );
  }


}
