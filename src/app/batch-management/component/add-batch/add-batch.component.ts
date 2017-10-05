import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UpdateBatchComponent } from '../update-batch/update-batch.component';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  openAddBatchDialog(){
    this.dialog.open(UpdateBatchComponent);
  }
}
