// profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8080/user/users';
  private baseUrl1 = 'http://localhost:8080/user/get/';

  constructor(private httpClient: HttpClient) {}

  getProfiles(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
  getProfileByRid(rid: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl1}${rid}`);
  }
}
