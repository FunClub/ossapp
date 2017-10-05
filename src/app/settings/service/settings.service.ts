import { Observable } from 'rxjs/Observable';
import { SettingsApiModel } from './../model/settings-api.model';
import { MenuItemModel, MenuModel } from './../model/menu.model';

import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService extends BaseService{

    constructor(protected http:HttpClient,private api:SettingsApiModel) { super(http);}
    public filterMenuItemId(items:MenuItemModel[]):string[]{
        let ids = [];
        items.forEach(element => {
            ids.push(element.id)
        });
        return ids;
    }
    public insertMenuModel(data:MenuModel){
        return this.post(this.api.MENU,data);
    }

    public selectMenuItem():Observable<MenuItemModel[]>{
        return this.get(this.api.MENU_ITEM).map(res=>res.data);
    }

}