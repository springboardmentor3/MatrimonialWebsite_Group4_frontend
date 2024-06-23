import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import {  Image } from '../image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http:HttpClient

  ) { }
  public addUImage_data(image_data:FormData){
      return this.http.post(`${baseURL}/image/`,image_data);
  }
}
