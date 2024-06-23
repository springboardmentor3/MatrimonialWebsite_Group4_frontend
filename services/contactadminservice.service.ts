// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import baseURL from './helper';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactadminserviceService {

//   constructor( private http:HttpClient) { 
   
    
//   }
//   public addContact(contact:any){
//     return this.http.post(`${baseURL}/contact/`,contact);
// }
// public getAllContacts() {
//   return this.http.get<any[]>(`${baseURL}/contact/contacts`);
// }
// }


// contactadminservice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactadminserviceService {
  private baseURL = 'http://localhost:8080/contact'; // Update with your Spring Boot backend URL
  private replyApiUrl = 'http://localhost:8080/reply'; // Endpoint for replies

  constructor(private http: HttpClient) { }


  public getAllContacts() {
    return this.http.get<any[]>(`${this.baseURL}/contacts`);
  }
  
  public addContact(contact:any){
        return this.http.post(`${this.baseURL}/`,contact);
  }
  sendReply(contactId: number, replyMessage: string, contact: any): Observable<any> {
    const payload = {
      rid: contact.id,
      name: contact.name,
      email: contact.email,
    
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      time: new Date().toTimeString().split(' ')[0], // Current time in HH:MM:SS format
      message: replyMessage,
      isNew : true
    };
    return this.http.post(`${this.replyApiUrl}/`, payload);
  }
}
