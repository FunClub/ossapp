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
  public batchs:BatchModel[];
  public movieUrl:string;
  constructor(private batchService:BatchService,private fileService:FileService) {
    this.batchs=[];
  }

  ngOnInit() {
    this.batchService.selectBatch().subscribe(res=>{
      this.batchs = res;
    });
  }
  uploadFile(file:File){
    this.fileService.uploadFile(file).subscribe(res=>{
      this.movieUrl = res;
    })
  }
 

}
