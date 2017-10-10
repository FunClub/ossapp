import { ToastsManager } from 'ng2-toastr';
import { BatchService } from './../../service/Batch.service';
import { BatchModel } from './../../model/batch.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-batch',
  templateUrl: './update-batch.component.html',
  styleUrls: ['./update-batch.component.css']
})
export class UpdateBatchComponent implements OnInit {
  public batch:BatchModel;
  public busy:any;
  constructor(private batchService:BatchService,private toasts:ToastsManager) { 
    this.batch = new BatchModel();
  }

  ngOnInit() {
  }
  insertBatch(close:HTMLButtonElement){
    this.busy = this.batchService.insertBatch(this.batch).subscribe(res=>{
      if(res.data){
        this.toasts.success("学院添加成功","添加结果");
        close.click();
      }else{
        this.toasts.error("学院添加失败","添加结果");
      }
    })
  }
}
