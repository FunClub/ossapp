import { ToastsManager } from 'ng2-toastr';
import { UpdateRoleModel } from './../../model/role.model';
import { SettingsService } from './../../service/settings.service';
import { ShowMenuModel, MenuItemModel } from './../../model/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  public menus:Array<MenuItemModel>;
  public checkedMenuItems:Array<MenuItemModel>;
  public updateRoleModel:UpdateRoleModel;
  constructor(private settingService:SettingsService,private toasts:ToastsManager) {
    this.menus=[];
    this.checkedMenuItems=[];
    this.updateRoleModel = new UpdateRoleModel();
   }

  ngOnInit() {
    this.settingService.selectMenu("menu").subscribe(res=>{
      this.menus = res;
    });
  }

  insertRole(close:HTMLButtonElement){
    this.updateRoleModel.menuIds = this.settingService.filterMenuId(this.checkedMenuItems);
    this.settingService.insertRole(this.updateRoleModel).subscribe(res=>{
      if(res.data){
        this.toasts.success("添加角色成功","添加结果");
        close.click();
      }else{
        this.toasts.error("添加角色失败!请重试...","添加结果");
      }
    });
  }
}
