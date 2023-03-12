import { Component } from '@angular/core';
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public attributesList : any ;
  constructor(private api : ApiService){}

  ngOnInit():void {
    this.api.getProduct()
      .subscribe(res=>{
        this.attributesList = res;
      })

  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText =  searchValue;
    console.log(this.searchText);

  }



}
