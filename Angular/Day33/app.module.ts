import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle'; 
import { NgxCaptchaModule } from 'ngx-captcha';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpadteEmployeeComponent } from './upadte-employee/upadte-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MaterialModule } from './shared/material.module';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    AddemployeeComponent,
    EmpDetailsComponent,
    UpadteEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ParticlesModule,
    NgxCaptchaModule,
    HttpClientModule,
    NgxPaginationModule,    
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    LoadingBarRouterModule
  ],
  providers: [],
  entryComponents:[MatConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
