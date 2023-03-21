import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
 providedIn:"root"
})
export class Apiservice {
  constructor(private http: HttpClient) {
  }

  feedbackBook(data: any) {
    return this.http.post<any>("http://localhost:3000/feeedback/",data);
  }
  getBook(){
    return this.http.get<any>("http://localhost:3000/feeedback/");
  }
}
