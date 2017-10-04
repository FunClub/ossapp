import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MenuItemModel } from './../../model/menu.model';
import { SettingsService } from './../../service/settings.service';
import { UpdateMenuComponent } from './../update-menu/update-menu.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  public items:MenuItemModel[];
  public subDataSource:SubDataSource;
  public displayedSubColumns=['checked','icon','label','url','operation'];
  constructor(private dialog:MdDialog,private settingService:SettingsService) {
    this.subDataSource = new SubDataSource(settingService);
   }

  ngOnInit() {
    this.subDataSource.connect().subscribe();
  }
  private selectMenuItem(){
    this.settingService.selectMenuItem().subscribe(res=>this.items=res);
  }
  openAddMenu(){
    this.dialog.open(UpdateMenuComponent);
  }
}
export class SubDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render. 
  constructor(private service:SettingsService){
    super();
  }
 connect(): Observable<MenuItemModel[]> {
   return this.service.selectMenuItem();
 }

 disconnect() {}
}
