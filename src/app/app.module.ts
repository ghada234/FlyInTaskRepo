import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrendingSubjectsComponent } from './trending-subjects/trending-subjects.component';
import { SharedModule } from './Shared/shared.module';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { LoadingSpinnerInterceptorInterceptor } from './interceptors/loading-spinner-interceptor.interceptor';
import { CacheInterceptorInterceptor } from './interceptors/cache-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrendingSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,

    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    PaginationModule
 
  ],
  providers: [  {provide:HTTP_INTERCEPTORS,useClass:LoadingSpinnerInterceptorInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:CacheInterceptorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
