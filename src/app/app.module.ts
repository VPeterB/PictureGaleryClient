import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpServiceService} from "./service/http-service.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./service/auth.interceptor";
import {UserServiceService} from "./service/user-service.service";
import {RoleGuard} from "./service/role.guard";

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PhotoComponent } from './component/photo/photo.component';
import { UploadComponent } from './component/upload/upload.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PhotoComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    HttpServiceService,
    UserServiceService,
    RoleGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
