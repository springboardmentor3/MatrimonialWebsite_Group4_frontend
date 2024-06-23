// notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8080/api/send-notification';

  constructor(private http: HttpClient) {}

  sendNotification(email: string, message: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, message });
  }
}
