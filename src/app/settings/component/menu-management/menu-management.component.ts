import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MenuItemModel, MenuDialogArgs, ShowMenuModel } from './../../model/menu.model';
import { SettingsService } from './../../service/settings.service';
import { UpdateMenuComponent } from './../update-menu/update-menu.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {
  public items:MenuItemModel[];
  public subDataSource:SubDataSource;
  public displayedSubColumns=['checked','icon','label','url','operation'];
  public busy:any;
  constructor(private dialog:MatDialog,private settingService:SettingsService) {
    this.subDataSource = new SubDataSource(settingService);
   }

  ngOnInit() {
    this.busy=this.subDataSource.connect().subscribe();
  }
  updateMenu(menu:ShowMenuModel){
    let arg = new MenuDialogArgs();
    arg.targetIsAdd = false;
    arg.menu = menu;
    this.openAddMenu(arg);
  }
  openAddMenu(arg:MenuDialogArgs){
    if(!arg){
      arg = new MenuDialogArgs();
    }
    this.dialog.open(UpdateMenuComponent,{
      data:arg
    }).afterClosed().subscribe(()=>{
      if(arg.isUpdated){
        this.subDataSource = new SubDataSource(this.settingService);
        this.busy=this.subDataSource.connect().subscribe();
      }
    });
  }
}
export class SubDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render.
  constructor(private service:SettingsService){
    super();
  }
 connect(): Observable<MenuItemModel[]> {
   return this.service.selectMenu("all");
 }

 disconnect() {}
}
