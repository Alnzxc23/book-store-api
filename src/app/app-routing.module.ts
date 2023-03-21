import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookPageComponent} from "./book-page/book-page.component";
import {RatepageComponent} from "./ratepage/ratepage.component";
import {FeedbacktableComponent} from "./feedbacktable/feedbacktable.component";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'book/:id', component:BookPageComponent},
  {path:'rate/:id', component:RatepageComponent},
  {path: 'feedback/:id', component:FeedbacktableComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


