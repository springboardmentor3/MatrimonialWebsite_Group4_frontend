import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ' http://localhost:8080/user'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  // Method to check if a user exists based on email
  getUserByEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}/${email}`; // Update endpoint URL
    return this.http.get(url);
  }
}
