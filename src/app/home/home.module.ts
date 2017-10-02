import { HomeGuard } from './home-guard';
import { HomeService } from './service/home.service';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import {MdSidenavModule} from '@angular/material';
import { MenuComponent } from './component/menu/menu.component';
import { HomeApiModel } from './model/home-api.model';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MdSidenavModule
  ],
  providers:[
    HomeService,
    HomeApiModel,
    HomeGuard
  ],
  declarations: [HomeComponent, MenuComponent]
})
export class HomeModule { }
