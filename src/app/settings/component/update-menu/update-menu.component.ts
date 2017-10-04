import { SettingsService } from './../../service/settings.service';
import { ToastsManager } from 'ng2-toastr';
import { InsertMenuModel, MenuModel, MenuItemModel } from './../../model/menu.model';
import { Component, OnInit } from '@angular/core';
import { AppUtil } from '../../../share/model/util.model';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  public insertMenuModel:InsertMenuModel;
  public items:MenuItemModel[];
  public checkedMenuItems:MenuItemModel[];
  constructor(private toasts:ToastsManager,private settingService:SettingsService) { 
    this.insertMenuModel = new InsertMenuModel();
    this.checkedMenuItems=[];
  }

  ngOnInit() {
    this.settingService.selectMenuItem().subscribe(res=>this.items=res);
  }
  public checkMenuItem(event,item:MenuItemModel){
    if(event.source.checked){
      this.checkedMenuItems.push(item);
    }else{
      AppUtil.removeElement(this.checkedMenuItems,item);
    }
  }
  public insertMenu(close:HTMLButtonElement){
    console.log(this.insertMenuModel);
    this.settingService.insertMenuModel(this.insertMenuModel).subscribe(res=>{
      if(res.data){
        this.toasts.success("添加菜单成功","添加结果");
        close.click();
      }else{
        this.toasts.error("添加菜单失败!请重试...","添加结果");
      }
    });
  }
}
