import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(
    private http:HttpClient

  ) { }
  public addFamily(family:any){
      return this.http.post(`${baseURL}/family/`,family);
  }
  public getFamily(id: number) {
    return this.http.get<any>(`${baseURL}/family/get/${id}`);
  }
}
