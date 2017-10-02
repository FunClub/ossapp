import { SettingsService } from './service/settings.service';
import { SettingsApiModel } from './model/settings-api.model';
import { UpdateMenuComponent } from './component/update-menu/update-menu.component';
import { ShareModule } from './../share/share.module';
import { AddMenuComponent } from './component/add-menu/add-menu.component';
import { SettingsComponent } from './component/settings/settings.component';
import {MdSelectModule,MdTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MdSelectModule,
    MdTabsModule
  ],
  entryComponents:[
    UpdateMenuComponent
  ],
  declarations: [SettingsComponent,AddMenuComponent,UpdateMenuComponent],
  providers:[
    SettingsApiModel,
    SettingsService
  ]
})
export class SettingsModule { }