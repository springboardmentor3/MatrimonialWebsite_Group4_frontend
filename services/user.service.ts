import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient

  ) { }
  public addUser(user:any){
      return this.http.post(`${baseURL}/user/`,user);
  }
  public getAllUsers() {
    return this.http.get<any[]>(`${baseURL}/user/users`);
  }

  public getAllEmployees() {
    return this.http.get<any[]>(`${baseURL}/candidate/candidates`);
  }

  public getAllAdmins() {
    return this.http.get<any[]>(`${baseURL}/admin/admins`);
  }
  public sendVerificationEmail(email: string) {
    return this.http.post(`${baseURL}/api/send-verification-email`, { email });
  }

  public verifyEmail(email: string, code: string) {
    return this.http.post(`${baseURL}/api/verify-email`, { email, code });
  }
  public deleteUser(rid: number): Observable<any> {
    return this.http.delete(`${baseURL}/user/${rid}`);
  }
  public addToFavorites(favorite: any): Observable<any> {
    return this.http.post(`${baseURL}/favourites/`, favorite);
  }

  // public deleteUser(rid:number) {
  //   return this.http.delete(`${baseURL}/user/${rid}`, rid);
  // }
//  public  updatePassword(email: string, newPassword: string): Observable<any> {
//     return this.http.post(`${baseURL}/user/updatepassword`, { email, newPassword });
//   }
// public updatePassword(email: string, newPassword: string): Observable<any> {
//   return this.http.put(`${baseURL}/user/${email}/${newPassword}`, { newPassword });
// }
public updatePassword(email: string, newPassword: string): Observable<any> {
  return this.http.put(`${baseURL}/user/${email}/${newPassword}`, { email,newPassword });
}

}
