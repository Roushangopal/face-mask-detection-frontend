import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { peopleWithoutMask } from './peopleWithoutMask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutMaskService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/peopleWithoutMask";
  private url1: string = "http://localhost:3000/email";
  public email1 = {};

  getPeopleWithoutMask(): Observable<peopleWithoutMask[]>{
    return this.http.get<peopleWithoutMask[]>(this.url)
  }

  generateEmail(email: any){
    console.log(email)
    this.email1 = {"email": email}
    this.http.post(this.url1, this.email1).toPromise().then(data => {
      console.log(data)
      this.http.get("http://localhost:3000/deletePeopleWithoutMask").toPromise().then(data => {
        console.log(data)
      })
    })
  }
}
