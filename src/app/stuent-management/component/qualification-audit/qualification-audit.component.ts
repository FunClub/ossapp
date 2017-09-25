import { ToastsManager } from 'ng2-toastr';
import { AppApiModel } from './../../../share/model/app-api.model';
import { UserModel } from './../../../share/model/user.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { StudentManagementService } from '../../service/student-management.service';
import { StudentQueryModel } from '../../model/student-query.model';
@Component({
  selector: 'app-qualification-audit',
  templateUrl: './qualification-audit.component.html',
  styleUrls: ['./qualification-audit.component.css']
})

export class QualificationAuditComponent implements OnInit {
  public query:StudentQueryModel;
  public displayedColumns = ['id', 'nickname', 'sex', 'state'];
  public dataSource:ExampleDataSource;
  constructor(private service:StudentManagementService,public api:AppApiModel,private toasts:ToastsManager) { 
    this.query = new StudentQueryModel();
    this.dataSource = new ExampleDataSource(service,this.query);
  }

  ngOnInit() {

  }
  showUnAuditStudent(event){
    this.query.showUnAudit = event.checked;
    this.dataSource.query=this.query;
    let newQuery = new StudentQueryModel();
    for(let key in this.query){
      newQuery[key]=this.query[key];
    }
    this.dataSource.query = newQuery;
    this.dataSource.connect().subscribe();
  }
  stateToggle(event,user:UserModel){
    user.state = event.source.checked;
    this.service.updateStudent(user).subscribe(res=>{
      if(res.data){
        if(user.state){
          this.toasts.success("激活成功!","激活结果")
        }else{
          this.toasts.success("禁用成功!","禁用结果")
        }
        
      }else{
        if(user.state){
          this.toasts.error("激活失败,请重试！","激活结果")
        }else{
          this.toasts.error("禁用失败,请重试！","禁用结果")
        }
        
      }
    })
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