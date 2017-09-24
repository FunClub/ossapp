import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../share/service/base.service';
import {RegisterApiModel} from "../model/register-api.model";

@Injectable()
export class RegisterService extends BaseService{

  constructor(protected http:HttpClient,private api:RegisterApiModel) {
    super(http);
  }
  verificationCodeActually(code:string){
    return this.get(this.api.VALIDATE_CODE(code)).map(res=>{
        return res.data? null:{"verificationCodeActually":"验证码错误"}
    })
  }
  
  register(user:any){
    return this.post(this.api.REGISTER,user);
  }

  
}
