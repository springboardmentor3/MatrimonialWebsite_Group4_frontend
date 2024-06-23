// profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:8080/message/';
  private baseUrl1 = 'http://localhost:8080/favourites/';

  constructor(private httpClient: HttpClient) {}

  // getProfiles(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.baseUrl}`);
  // }

  getProfilesByRecrid(): Observable<any[]> {
    const recrid = sessionStorage.getItem('userId');
    if (recrid) {
      return this.httpClient.get<any[]>(`${this.baseUrl}${recrid}`);
    } else {
      throw new Error('Recrid is not available in session storage');
    }
  }

  getProfilesBysendRecrid(): Observable<any[]> {
    const recrid = sessionStorage.getItem('userId');
    if (recrid) {
      return this.httpClient.get<any[]>(`${this.baseUrl}get/${recrid}`);
    } else {
      throw new Error('Recrid is not available in session storage');
    }
  }
  getProfilesBysendRecrid1(): Observable<any[]> {
    const recrid = sessionStorage.getItem('userId');
    if (recrid) {
      return this.httpClient.get<any[]>(`${this.baseUrl1}get/${recrid}`);
    } else {
      throw new Error('Recrid is not available in session storage');
    }
  }
  
  updateApprovalStatus(messageId: number): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}${messageId}/approve`, {});
  }

}
