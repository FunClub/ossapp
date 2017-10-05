import { MenuComponent } from './../../../home/component/menu/menu.component';
import { DragulaService } from 'ng2-dragula';
import { SettingsService } from './../../service/settings.service';
import { ToastsManager } from 'ng2-toastr';
import { MenuItemModel, MenuModel, MenuDialogArgs } from './../../model/menu.model';
import { Component, OnInit, Inject } from '@angular/core';
import { AppUtil } from '../../../share/model/util.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  public insertMenuModel:MenuModel;
  public items:Array<MenuItemModel>;
  public checkedMenuItems:Array<MenuItemModel>;
  public menuType:string;
  constructor(@Inject(MAT_DIALOG_DATA)public arg:MenuDialogArgs, private toasts:ToastsManager,private settingService:SettingsService,private dragulaService: DragulaService) { 
    this.insertMenuModel = new MenuModel();
    this.items=[];
    this.checkedMenuItems=[];
    this.menuType="menu";
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
    console.log(arg);
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
    if(this.menuType=='menu'){
      this.insertMenuModel.itemIds=this.settingService.filterMenuItemId(this.checkedMenuItems);
    }
    this.settingService.insertMenuModel(this.insertMenuModel).subscribe(res=>{
      if(res.data){
        this.toasts.success("添加菜单成功","添加结果");
        this.arg.isUpdated=true;
        close.click();
      }else{
        this.toasts.error("添加菜单失败!请重试...","添加结果");
      }
    });
  }
  private onDropModel(args) {
    let [el, target, source] = args;
  }

  private onRemoveModel(args) {
    let [el, source] = args;
  }
}
