export class ChildrenItemModel{
  icon:string;
  label:string;
  link:string;
}
export class MenuModel extends ChildrenItemModel{
    children:ChildrenItemModel[];
}


