import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookcontentService {

  constructor(public http:HttpClient) { }

  getDetails(id:number):Observable<object>{
    return this.http.get("http://localhost:9090/details/"+id);
  }

}