import { MenuItemModel } from './menu.model';
export class RoleModel{
    public id:string;
    public name:string;
    public description;
    public menuIds:String[];
}

export class UpdateRoleModel extends RoleModel{
    
}

export class ShowRoleModel extends RoleModel{
    public menus:MenuItemModel[];
}
