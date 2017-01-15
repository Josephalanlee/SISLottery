
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {EnterResultsComponent} from './results/enter-results.component';
import {DrawService} from './draw/draw.service';
import { CreateDrawComponent } from './draw/create-draw.component';
import {SearchComponent} from './search/search.component';
import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {HttpModule} from '@angular/http';



@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ToastModule,HttpModule],
  declarations: [AppComponent, CreateDrawComponent, EnterResultsComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [DrawService]
})


export class AppModule {

  

 }