import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {MdButtonModule,MdDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppApiModel } from './model/app-api.model';
import {HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { MdSlideToggleModule, MdInputModule, MdTableModule,MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdButtonModule,
    MdDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgProgressModule,
    MdSlideToggleModule
  ],
  exports:[
    AppRoutingModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgProgressModule,
    MdSlideToggleModule,
    MdInputModule,
    MdTableModule,
    MdCheckboxModule
  ],
  providers:[
    AppApiModel,
    {provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  declarations: []
})
export class ShareModule { }
