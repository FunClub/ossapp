export class MenuItemModel{
    id:string;
    label:string;
    url:string;
    icon:string;
}
export class MenuModel extends MenuItemModel{
    itemIds:string[];
}
export class ShowMenuModel extends MenuItemModel{
    items:MenuItemModel[];
}

export class InsertMenuModel{
    type:string;
    menuItem:MenuItemModel;
    menu:MenuModel;
    constructor(){
        this.menu = new MenuModel();
        this.menuItem = new MenuItemModel();
        this.type="menu";
    }
}

