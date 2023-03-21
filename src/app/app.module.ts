import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './book-page/book-page.component';
import {RatingModule} from "ng-starrating";
import { RatepageComponent } from './ratepage/ratepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedbacktableComponent } from './feedbacktable/feedbacktable.component';
import {Apiservice} from "./services/book/apiservice";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BookPageComponent,
    RatepageComponent,
    FeedbacktableComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
