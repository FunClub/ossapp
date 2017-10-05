import { BusyComponent } from './component/busy/busy.component';
import { AppMenuUrlPipe } from './pipe/menu-url.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {MatButtonModule,MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppApiModel } from './model/app-api.model';
import {HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { MatSlideToggleModule, MatInputModule, MatTableModule,MatCheckboxModule } from '@angular/material';
import {BusyModule} from 'angular2-busy';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BusyModule
  ],
  exports:[
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgProgressModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    AppMenuUrlPipe,
    BusyComponent
  ],
  providers:[
    AppApiModel,
    {provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  declarations: [AppMenuUrlPipe,BusyComponent]
})
export class ShareModule { }
