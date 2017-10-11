import { ToastsManager } from 'ng2-toastr';
import { AppApiModel } from './../../../share/model/app-api.model';
import { UserModel } from './../../../share/model/user.model';
import { Observable } from 'rxjs/Observable';
import { StudentQueryModel } from './../../model/student-query.model';
import { StudentManagementService } from './../../service/student-management.service';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-authority',
  templateUrl: './student-authority.component.html',
  styleUrls: ['./student-authority.component.css']
})
export class StudentAuthorityComponent implements OnInit {
  public query:StudentQueryModel;
  public displayedColumns = ['checked','id', 'nickname', 'sex', 'state'];
  public dataSource:ExampleDataSource;
  constructor(private service:StudentManagementService,public api:AppApiModel,private toasts:ToastsManager) { 
    this.query = new StudentQueryModel();
    this.dataSource = new ExampleDataSource(service,this.query);
  }

  ngOnInit() {
  }

}
export class ExampleDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render. 
  constructor(private service:StudentManagementService,public query:StudentQueryModel){
    super();
  }
 connect(): Observable<UserModel[]> {
   return this.service.selectStudents(this.query).map(res=>{return res.data.content;});
 }

 disconnect() {}
}