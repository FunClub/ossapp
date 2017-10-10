import { Observable } from 'rxjs';
import { BatchModel } from './../../model/batch.model';
import { DataSource } from '@angular/cdk/collections';
import { BatchService } from './../../service/Batch.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateBatchComponent } from '../update-batch/update-batch.component';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {
  public subDataSource:SubDataSource;
  public busy:any;
  public displayedSubColumns=['checked','name','course','operation'];
  constructor(private dialog:MatDialog,private batchService:BatchService) { 
    this.subDataSource = new SubDataSource(batchService);
  }
  
  ngOnInit() {
    this.busy = this.subDataSource.connect().subscribe;
  }
  openAddBatchDialog(){
    this.dialog.open(UpdateBatchComponent);
  }
}
export class SubDataSource extends DataSource<any> {
  //Connect function called by the table to retrieve one stream containing the data to render.
  constructor(private service:BatchService){
    super();
  }
 connect(): Observable<BatchModel[]> {
   return this.service.selectBatch();
 }

 disconnect() {}
}