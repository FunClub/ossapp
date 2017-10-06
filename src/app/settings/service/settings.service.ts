import { RoleModel } from './../model/role.model';
import { AppUtil } from './../../share/model/util.model';
import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { SettingsApiModel } from './../model/settings-api.model';
import { MenuItemModel, MenuModel } from './../model/menu.model';

import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService extends BaseService{

    constructor(protected http:HttpClient,private api:SettingsApiModel) { super(http);}
    public insertRole(role:RoleModel){
        return this.post(this.api.ROLE,role);
    }
    public updateMenu(data:MenuModel){
        return this.put(this.api.MENU,data);
    }
    public filterCheckedItem(items:MenuItemModel[],checkedItem:MenuItemModel[]){
        let index = [];
        for(let i=0;i<items.length;i++){
            checkedItem.forEach(element => {
                if(items[i].id==element.id){
                    index.push(items[i].id);
                }
            });
        }
        index.forEach(element => {
            AppUtil.removeElementByProp(items,"id",element);
        });
    }
    public filterMenuId(items:MenuItemModel[]):string[]{
        let ids = [];
        items.forEach(element => {
            ids.push(element.id)
        });
        console.log(items);
        return ids;
    }
    public insertMenuModel(data:MenuModel){
        return this.post(this.api.MENU,data);
    }

    public selectMenu(type:string):Observable<MenuItemModel[]>{
        return this.get(this.api.SELECT_MENU(type)).map(res=>res.data);
    }

}