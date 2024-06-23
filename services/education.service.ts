import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http:HttpClient

  ) { }
  public addEducation(education:any){
      return this.http.post(`${baseURL}/education/`,education);
  }
  public getEducation(id: number) {
    return this.http.get<any>(`${baseURL}/education/get/${id}`);
  }
  


}
