import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamManagementComponent } from './component/exam-management/exam-management.component';
import {ShareModule} from "../share/share.module";
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { AddPaperComponent } from './component/add-paper/add-paper.component';
import { CorrectPaperComponent } from './component/correct-paper/correct-paper.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [ExamManagementComponent, AddSubjectComponent, AddPaperComponent, CorrectPaperComponent]
})
export class ExamManagementModule { }
