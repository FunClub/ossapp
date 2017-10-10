import { BatchModel } from './../model/batch.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../share/service/base.service';
import { BatchApiModel } from '../model/batch-api.model';

@Injectable()
export class BatchService extends BaseService{

    constructor(protected http:HttpClient,private api:BatchApiModel) { 
        super(http);
    }

    insertBatch(batch:BatchModel){
        return this.post(this.api.BATCH,batch);
    }

    selectBatch(){
        return this.get(this.api.BATCH).map(res=>res.data);
    }
}