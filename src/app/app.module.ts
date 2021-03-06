import { SettingsModule } from './settings/settings.module';
import {BaseToastsOptions } from './share/model/custome-toasts.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {ShareModule} from "./share/share.module";
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS} from "@angular/material";
import {RegisterModule} from "./register/register.module";
import { HomeModule } from './home/home.module';
import {StudentManagementModule} from "./stuent-management/student-management.module";
import {CourseManagementModule} from "./course-management/course-management.module";
import {ExamManagementModule} from "./exam-management/exam-management.module";
import {BatchManagementModule} from "./batch-management/batch-management.module";
import {ToastOptions, ToastModule} from "ng2-toastr";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    ShareModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    StudentManagementModule,
    CourseManagementModule,
    ExamManagementModule,
    BatchManagementModule,
    SettingsModule
  ],
  providers: [
    /*弹出框全局配置*/
    {provide:ToastOptions,useClass:BaseToastsOptions},
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
