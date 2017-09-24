import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAuthorityComponent } from './component/student-authority/student-authority.component';
import { StudentManagementComponent } from './component/student-management/student-management.component';
import {ShareModule} from "../share/share.module";
import { QualificationAuditComponent } from './component/qualification-audit/qualification-audit.component';
import {MdTableModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MdTableModule
  ],
  declarations: [StudentAuthorityComponent, StudentManagementComponent, QualificationAuditComponent]
})
export class StudentManagementModule { }
