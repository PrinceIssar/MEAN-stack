import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Friend} from "../interfaces/friend";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  apiUrl = 'http://localhost:3000/friends'

  constructor(private http: HttpClient) { }

  //create method for all
  all(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.apiUrl)
  }

  //create method
  create(data: any): Observable<Friend[]>{
    return this.http.post<Friend[]>(this.apiUrl, data)
  }
  //get method
  get(id: number): Observable<Friend>{ // no [] as it's for one id
    return this.http.get<Friend>(`${this.apiUrl}/${id}`)
  }

  //update method
  update(id: number, data:any): Observable<Friend>{
    return this.http.put<Friend>(`${this.apiUrl}/${id}`, data)
  }
  //Delete method
  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
