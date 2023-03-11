import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/attributes")
      .pipe(map((res:any)=>{
        return res;
    }))
  }
}
