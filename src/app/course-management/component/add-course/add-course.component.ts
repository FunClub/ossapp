import { UpdateCourseComponent } from './../update-course/update-course.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private dialog:MatDialog) {
    
  }

  ngOnInit() {
  }
  updateCourse(){
    this.dialog.open(UpdateCourseComponent);
  }
}
