import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchMenagementComponent } from './component/batch-menagement/batch-menagement.component';
import { AddBatchComponent } from './component/add-batch/add-batch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BatchMenagementComponent, AddBatchComponent]
})
export class BatchManagementModule { }
