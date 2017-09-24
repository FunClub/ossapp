import { UserModel } from './../model/user.model';
import { HomeApiModel } from './../model/home-api.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService extends BaseService{
    public user:UserModel;
    constructor(protected http:HttpClient,private api:HomeApiModel) {super(http) }
    canToHome(){
        return this.get(this.api.CAN_TO_HOME).map(res=>{
            this.user=res.data as UserModel;
            return this.user!=null;
        });
    }

}