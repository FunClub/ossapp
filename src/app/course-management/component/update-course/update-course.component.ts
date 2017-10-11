import { ToastsManager } from 'ng2-toastr';
import { CourseService } from './../../service/course.service';
import { CourseModel } from './../../model/course.model';
import { FileService } from './../../../share/service/file.service';
import { BatchService } from './../../../batch-management/service/Batch.service';
import { BatchModel } from './../../../batch-management/model/batch.model';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  public batchs: BatchModel[];
  public movieUrl: string;
  public courseModel: CourseModel;
  public busy: any;
  public uploadPading;
  constructor(private batchService: BatchService, private fileService: FileService,
    private courseService: CourseService, private toasts: ToastsManager
  ) {
    this.batchs = [];
    this.courseModel = new CourseModel();
    this.uploadPading = false;
  }

  insertCourse(close: HTMLButtonElement) {
    this.courseModel.movieUrl = this.movieUrl;
    this.courseService.insertCourse(this.courseModel).subscribe(res => {
      if (res.data) {
        this.toasts.success("添加课程成功!", "添加结果");
        close.click();
      } else {
        this.toasts.error("添加课程失败!请重试", "添加结果");
      }
    });
  }
  ngOnInit() {
    this.batchService.selectBatch().subscribe(res => {
      this.batchs = res;
    });
  }
  uploadFile(file: File) {
    this.uploadPading = true;
    this.fileService.uploadFile(file).subscribe(res => {
      this.movieUrl = res;
      this.uploadPading = false;
    })
  }


}
