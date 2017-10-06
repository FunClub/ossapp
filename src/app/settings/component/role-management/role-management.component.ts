import { UpdateRoleComponent } from './../update-role/update-role.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {

  constructor(private dialog:MatDialog) { 

  }

  ngOnInit() {
  }
  openUpdateRole(){
    this.dialog.open(UpdateRoleComponent);
  }

}
