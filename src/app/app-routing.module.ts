import { SettingsComponent } from './settings/component/settings/settings.component';
import { AddMenuComponent } from './settings/component/add-menu/add-menu.component';
import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/component/login/login.component";
import { HomeComponent } from './home/component/home/home.component';
import {StudentAuthorityComponent} from "./stuent-management/component/student-authority/student-authority.component";
import {StudentManagementComponent} from "./stuent-management/component/student-management/student-management.component";
import {CourseManagementComponent} from "./course-management/component/course-management/course-management.component";
import {AddCourseComponent} from "./course-management/component/add-course/add-course.component";
import {QualificationAuditComponent} from "./stuent-management/component/qualification-audit/qualification-audit.component";
import {UpdateCourseComponent} from "./course-management/component/update-course/update-course.component";
import {AddSubjectComponent} from "./exam-management/component/add-subject/add-subject.component";
import {AddPaperComponent} from "./exam-management/component/add-paper/add-paper.component";
import {CorrectPaperComponent} from "./exam-management/component/correct-paper/correct-paper.component";
import {AddBatchComponent} from "./batch-management/component/add-batch/add-batch.component";
import { HomeGuard } from './home/home-guard';
const appRoutes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[HomeGuard],
    children:[
      {path:'student-management',component:StudentManagementComponent,
        children:[
          {path:'qualification-audit',component:QualificationAuditComponent},
          {path:'student-authority',component:StudentAuthorityComponent},
          {path:'',redirectTo: 'qualification-audit', pathMatch: 'full'},
        ]
      },
      {path:'course-management',component:CourseManagementComponent,
        children:[
          {path:'add-course',component:AddCourseComponent},
          {path:'update-course',component:UpdateCourseComponent},
          {path:'',redirectTo: 'add-course', pathMatch: 'full'},
        ]
      },
      {path:'exam-management',component:CourseManagementComponent,
        children:[
          {path:'add-subject',component:AddSubjectComponent},
          {path:'add-paper',component:AddPaperComponent},
          {path:'correct-paper',component:CorrectPaperComponent},
          {path:'',redirectTo: 'add-subject', pathMatch: 'full'},
        ]
      },
      {path:'batch-management',component:CourseManagementComponent,
        children:[
          {path:'add-batch',component:AddBatchComponent},
          {path:'',redirectTo: 'add-batch', pathMatch: 'full'},
        ]
      },
      {path:'settings',component:SettingsComponent,
        children:[
          {path:'add-menu',component:AddMenuComponent},
          {path:'',redirectTo: 'add-menu', pathMatch: 'full'},
        ]
      }
    ]
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    /**
     * 采用hash路径的方式预加载模块
     */
    RouterModule.forRoot(appRoutes,{useHash:true,preloadingStrategy:PreloadAllModules})
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
