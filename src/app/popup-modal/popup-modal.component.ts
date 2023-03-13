import {Component,  OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";


@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit{

  // public attributesList : any ;
  // constructor(private api : ApiService){}
  //
  // ngOnInit():void {
  //   this.api.getAttributes()
  //     .subscribe(res=>{
  //       this.attributesList = res;
  //     })
  //
  // }



  constructor(){}
  //
 ngOnInit():void {

  }

}
