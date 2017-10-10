import { MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseManagementComponent } from './component/course-management/course-management.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import {ShareModule} from "../share/share.module";
import { UpdateCourseComponent } from './component/update-course/update-course.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatSelectModule
  ],
  entryComponents:[
    UpdateCourseComponent
  ],
  declarations: [CourseManagementComponent, AddCourseComponent, UpdateCourseComponent]
})
export class CourseManagementModule { }
