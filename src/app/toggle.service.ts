import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  private subject = new Subject<any>();
  toggleStyle(toggle:boolean){
    if(toggle){
      this.subject.next({"grid-template-columns": "5% 92% 3%","toggle":toggle});
    }
    else{
      this.subject.next({"grid-template-columns": "17% 80% 3%","toggle":toggle});
    }
  }
  getStyle(): Observable<any> {
    return this.subject.asObservable();
 }

}
