import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MenuItemModel, MenuDialogArgs } from './../../model/menu.model';
import { SettingsService } from './../../service/settings.service';
import { UpdateMenuComponent } from './../update-menu/update-menu.component';
import { MatDialog } from '@angular/material';
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
  public busy:any;
  constructor(private dialog:MatDialog,private settingService:SettingsService) {
    this.subDataSource = new SubDataSource(settingService);
   }

  ngOnInit() {
    this.busy=this.subDataSource.connect().subscribe();
  }
  
  openAddMenu(){
    let args = new MenuDialogArgs();
    args.targetIsAdd = true;
    this.dialog.open(UpdateMenuComponent,{
      data:args
    }).afterClosed().subscribe(()=>{
      if(args.isUpdated){
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
   return this.service.selectMenuItem();
 }

 disconnect() {}
}
