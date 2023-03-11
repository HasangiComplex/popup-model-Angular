import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import {HttpClientModule} from "@angular/common/http";
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupModalComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
