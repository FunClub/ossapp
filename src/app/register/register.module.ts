import { RegisterApiModel } from './model/register-api.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import {MdInputModule, MdRadioModule} from "@angular/material";
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterService } from './service/register.service';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdRadioModule,
    ShareModule
  ],
  providers:[
    RegisterApiModel,
    RegisterService
  ],
  entryComponents:[RegisterComponent],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
