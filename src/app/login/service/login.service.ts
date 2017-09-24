import { LoginApiModel } from './../model/login-api.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService extends BaseService{

    constructor(protected http:HttpClient,private api:LoginApiModel) {
        super(http);
    }

    login(loginInfo){
        return this.post(this.api.LOGIN,loginInfo);
    }

}