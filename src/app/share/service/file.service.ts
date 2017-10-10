import { AppApiModel } from './../model/app-api.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FileService extends BaseService{

    constructor(protected http: HttpClient,private api:AppApiModel) {
        super(http);
    }

    uploadFile(file:File){
        let data = new FormData();
        data.append("files",file);
        return this.post(this.api.UPLOAD_FILES,data).map(res=>{
            let url = res.data[0] as string;
            return this.api.File_PREFIX+url;
        });
    }

}