import { Component, OnInit } from '@angular/core';
import {MenuModel} from '../../model/menu.model'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menus:MenuModel[];
  constructor() {
    this.menus=[
      {
        icon:'supervisor_account',label:'学员管理',link:'student-management',
        children:[
          {icon:'verified_user',label:'资格审核',link:'student-management/qualification-audit'},
          {icon:'lock_outline',label:'权限设置',link:'student-management/student-authority'}
        ]
      },
      {
        icon:'class',label:'课程管理',link:'course-management',
        children:[
          {icon:'note_add',label:'添加课程',link:'course-management/add-course'},
          {icon:'border_color',label:'课程修改',link:'course-management/update-course'}
        ]
      },
      {
        icon:'g_translate',label:'考试管理',link:'exam-management',
        children:[
          {icon:'add_circle_outline',label:'添加试题',link:'exam-management/add-subject'},
          {icon:'queue',label:'生成试卷',link:'exam-management/add-paper'},
          {icon:'mode_edit',label:'批改试卷',link:'exam-management/correct-paper'}
        ]
      },
      {
        icon:'clear_all',label:'批次管理',link:'batch-management',
        children:[
          {icon:'playlist_add',label:'添加批次',link:'batch-management/add-batch'},
        ]
      },
      {
        icon:'settings_applications',label:'系统设置',link:'settings',
        children:[
          {icon:'view_list',label:'菜单管理',link:'settings/menu-management'},
          {icon:'person',label:'角色管理',link:'settings/role-management'},
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
