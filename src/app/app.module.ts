import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import {HttpClientModule} from "@angular/common/http";
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header1Component } from './header1/header1.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupModalComponent,
    CardsComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    Header1Component,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
