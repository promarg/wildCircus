import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Artists } from './model/artist';
import { Shows } from './model/shows';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}
url = 'http://localhost:8080/'
  getApiArtist = ():Observable<Artists>  =>{
  return this.http.get<Artists>(`${this.url}artists`);
  }

  getApiShows = (): Observable<Shows> =>{
    return this.http.get<Shows>(`${this.url}shows`);
  }


  formPost = (data): Observable<any> =>{
    return this.http.post<any>(`${this.url}billeterie`, data)
  }
  

  getSession = (): Observable<any> =>{
    return this.http.get<any>(`${this.url}billeterie`)
}
}