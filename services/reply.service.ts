import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor( private http:HttpClient) { }

  checkForNewReplies(rid: number): Observable<{ hasNewReplies: boolean }> {
    return this.http.get<{ hasNewReplies: boolean }>(`http://localhost:8080/reply/has-new-replies/${rid}`);
  }


  getAllReplyByRid(rid: number): Observable<any[]> {
    return this.http.get<any[]>(`${baseURL}/reply/replies/${rid}`);
  }

  
}
