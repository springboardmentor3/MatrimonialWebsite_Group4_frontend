import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(
    private http:HttpClient

  ) { }
  public addPersonal(personal:any){
      return this.http.post(`${baseURL}/personal/`,personal);
  }
  public getPersonal(id: number) {
    return this.http.get<any>(`${baseURL}/personal/get/${id}`);
  }
  

}
