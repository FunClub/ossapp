
export class MenuItemModel{
    id:string;
    label:string;
    url:string;
    icon:string;
    type:string;
}
export class MenuModel extends MenuItemModel{
    itemIds:string[];
}
export class ShowMenuModel extends MenuItemModel{
    items:MenuItemModel[];
}
export class UpdateMenuModel extends MenuModel{
    items:MenuItemModel[];
}
export class MenuDialogArgs{
    targetIsAdd:boolean;
    isUpdated:boolean;
    menu:ShowMenuModel;
    constructor(){
        this.isUpdated=false;
        this.targetIsAdd = true;
    }
}