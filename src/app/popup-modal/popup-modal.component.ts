import { Component } from '@angular/core';
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent {

  public attributesList : any ;
  constructor(private api : ApiService){}

  ngOnInit():void {
    this.api.getProduct()
      .subscribe(res=>{
        this.attributesList = res;
      })

  }



}
