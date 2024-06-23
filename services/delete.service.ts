import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(
    private http: HttpClient
  ) { }

  public deleteCandidate(candid: number) {
    return this.http.delete(`${baseURL}/candidate/delete/${candid}`);
  }
}
