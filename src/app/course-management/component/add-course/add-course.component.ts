import { PageRequestModel, PagedData } from './../../../share/model/page-request.model';
import { CourseModel } from './../../model/course.model';
import { Observable } from 'rxjs/Observable';
import { CourseService } from './../../service/course.service';
import { DataSource } from '@angular/cdk/collections';
import { UpdateCourseComponent } from './../update-course/update-course.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public busy:any;
  public subDataSource:SubDataSource;
  public displayedSubColumns=['checked','name','getCourse','batch','operation'];
  constructor(private dialog:MatDialog,private courseService:CourseService) {
    this.subDataSource = new SubDataSource(courseService);  
  }

  ngOnInit() {
    this.subDataSource.connect().subscribe();
  }
  updateCourse(){
    this.dialog.open(UpdateCourseComponent).afterClosed().subscribe(()=>{
      this.subDataSource = new SubDataSource(this.courseService);
      this.subDataSource.connect().subscribe();
    });
  }
}
export class SubDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render.
  constructor(private service:CourseService){
    super();
  }
 connect(): Observable<CourseModel[]> {
   return this.service.selectAllCourse();
 }

 disconnect() {}
}