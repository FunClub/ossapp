import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAuthorityComponent } from './component/student-authority/student-authority.component';
import { StudentManagementComponent } from './component/student-management/student-management.component';
import {ShareModule} from "../share/share.module";
import { QualificationAuditComponent } from './component/qualification-audit/qualification-audit.component';
import { MdTableModule, MdMenuModule } from '@angular/material';
import { StudentManagementApiModel } from './model/student-management-api.model';
import { StudentManagementService } from './service/student-management.service';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MdTableModule,
    MdMenuModule
  ],
  providers:[
    StudentManagementApiModel,
    StudentManagementService
  ],
  declarations: [StudentAuthorityComponent, StudentManagementComponent, QualificationAuditComponent]
})
export class StudentManagementModule { }
