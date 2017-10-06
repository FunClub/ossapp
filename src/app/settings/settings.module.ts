import { MenuSelectorComponent } from './component/menu-selector/menu-selector.component';
import { UpdateRoleComponent } from './component/update-role/update-role.component';
import { RoleManagementComponent } from './component/role-management/role-management.component';
import { MenuManagementComponent } from './component/menu-management/menu-management.component';
import { SettingsService } from './service/settings.service';
import { SettingsApiModel } from './model/settings-api.model';
import { UpdateMenuComponent } from './component/update-menu/update-menu.component';
import { ShareModule } from './../share/share.module';
import { SettingsComponent } from './component/settings/settings.component';
import {MatSelectModule,MatTabsModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula'
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatSelectModule,
    MatTabsModule,
    DragulaModule
  ],
  entryComponents:[
    UpdateMenuComponent,UpdateRoleComponent
  ],
  declarations: [SettingsComponent,MenuManagementComponent,UpdateMenuComponent,RoleManagementComponent,
  UpdateRoleComponent,MenuSelectorComponent
  ],
  providers:[
    SettingsApiModel,
    SettingsService
  ]
})
export class SettingsModule { }
