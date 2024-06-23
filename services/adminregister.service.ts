import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  constructor(
    private http:HttpClient

  ) { }
  public addCandidate(candidate:any){
      return this.http.post(`${baseURL}/candidate/`,candidate);
  }
}
