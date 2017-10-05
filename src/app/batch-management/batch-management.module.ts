import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { ShareModule } from '../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchMenagementComponent } from './component/batch-menagement/batch-menagement.component';
import { AddBatchComponent } from './component/add-batch/add-batch.component';
import { UpdateBatchComponent } from './component/update-batch/update-batch.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatInputModule
  ],
  entryComponents:[UpdateBatchComponent],
  declarations: [BatchMenagementComponent, AddBatchComponent,UpdateBatchComponent]
})
export class BatchManagementModule { }
