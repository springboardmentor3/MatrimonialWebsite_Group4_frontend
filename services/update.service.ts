import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  public updateUser(user: any) {
    return this.http.put(`${baseURL}/candidate/update`, user);
  }
}
