import { LoginApiModel } from './model/login-api.model';
import { LoginService } from './service/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { MatInputModule, MatCheckboxModule } from "@angular/material";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ShareModule,
    MatCheckboxModule
  ],
  providers:[
    LoginApiModel,
    LoginService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
