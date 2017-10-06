import { MenuComponent } from './../../../home/component/menu/menu.component';
import { DragulaService } from 'ng2-dragula';
import { SettingsService } from './../../service/settings.service';
import { ToastsManager } from 'ng2-toastr';
import { MenuItemModel, MenuModel, MenuDialogArgs, UpdateMenuModel } from './../../model/menu.model';
import { Component, OnInit, Inject } from '@angular/core';
import { AppUtil } from '../../../share/model/util.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  public updateMenuModel:UpdateMenuModel;
  public menus:Array<MenuItemModel>;
  public checkedMenuItems:Array<MenuItemModel>;
  constructor(@Inject(MAT_DIALOG_DATA)public arg:MenuDialogArgs, private toasts:ToastsManager,private settingService:SettingsService,
  ) { 
    this.updateMenuModel = new UpdateMenuModel();
    this.menus=[];
    this.checkedMenuItems=[];
    if(arg.menu){
      AppUtil.copyProperties(arg.menu,this.updateMenuModel);
    } 
  }
  ngOnInit() {
    this.settingService.selectMenu("menuItem").subscribe(res=>{
      this.menus=res;
      if(this.arg.menu&&this.arg.menu.items){
        this.settingService.filterCheckedItem(this.menus,this.arg.menu.items);
        this.checkedMenuItems = this.arg.menu.items;
      }
    });
  }

  public checkMenuItem(event,item:MenuItemModel){
    if(event.source.checked){
      this.checkedMenuItems.push(item);
    }else{
      AppUtil.removeElement(this.checkedMenuItems,item);
    }
  }
  public updateMenu(close:HTMLButtonElement){
    this.filterMenuItemId();
    
    this.settingService.updateMenu(this.updateMenuModel).subscribe(res=>{
      if(res.data){
        this.toasts.success("更新菜单成功","更新结果");
        this.arg.isUpdated=true;
        close.click();
      }else{
        this.toasts.error("更新菜单失败!请重试...","更新结果");
      }
    });
  }
  private filterMenuItemId(){
    if(this.updateMenuModel.type=='menu'){
      this.updateMenuModel.itemIds=this.settingService.filterMenuId(this.checkedMenuItems);
    }
  }
  public insertMenu(close:HTMLButtonElement){
    this.filterMenuItemId();
    this.settingService.insertMenuModel(this.updateMenuModel).subscribe(res=>{
      if(res.data){
        this.toasts.success("添加菜单成功","添加结果");
        this.arg.isUpdated=true;
        close.click();
      }else{
        this.toasts.error("添加菜单失败!请重试...","添加结果");
      }
    });
  }
}
