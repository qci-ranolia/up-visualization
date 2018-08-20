import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { APIService } from './services/APIService';
import { ProjectService } from './services/ProjectService';
import { UploadComponent } from './upload/upload.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UploadComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [
    APIService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
