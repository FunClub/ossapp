import { ShowRoleModel } from './../../model/role.model';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { SettingsService } from './../../service/settings.service';
import { UpdateRoleComponent } from './../update-role/update-role.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  public busy:any;
  public subDataSource:SubDataSource;
  public displayedSubColumns=['checked','name','description','operation'];
  constructor(private dialog:MatDialog,private settingService:SettingsService) { 
    this.subDataSource = new SubDataSource(settingService);
  }

  ngOnInit() {
    this.subDataSource.connect().subscribe();
  }
  openUpdateRole(){
    this.dialog.open(UpdateRoleComponent);
  }

}
export class SubDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render.
  constructor(private service:SettingsService){
    super();
  }
 connect(): Observable<ShowRoleModel[]> {
   return this.service.selectRole();
 }

 disconnect() {}
}
