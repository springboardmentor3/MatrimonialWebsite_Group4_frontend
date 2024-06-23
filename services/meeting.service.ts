import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(
    private http:HttpClient

  ) { }
  public addMeeting(meeting:any){
      return this.http.post(`${baseURL}/message/`,meeting);
  }
}
