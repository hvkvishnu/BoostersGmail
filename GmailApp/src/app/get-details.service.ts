import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  constructor(private http: HttpClient) { }

  url: String='assets/';

  getContent(content): Observable<any>{
    return this.http.get(this.url+content+'.json'); 
   }
  
}
