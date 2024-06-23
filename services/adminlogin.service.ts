import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = ' http://localhost:8080/admin'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  // Method to check if a user exists based on email
  getUserByEmail(adminid: any): Observable<any> {
    const url = `${this.apiUrl}/${adminid}`; // Update endpoint URL
    return this.http.get(url);
  }
}
