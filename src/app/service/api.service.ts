import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getAttributes(){
    return this.http.get<any>("http://localhost:3000/attributes")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}

