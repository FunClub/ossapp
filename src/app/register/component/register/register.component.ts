import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,ValidationErrors} from "@angular/forms";
import { RegisterService } from '../../service/register.service';
import {Observable} from "rxjs";
import {RegisterApiModel} from "../../model/register-api.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup;
  public accountControl:FormControl;
  public passwordControl:FormControl;
  public validateControl:FormControl;
  public nicknameControl:FormControl;
  private EMAIL_REGEX = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
  constructor(private formBuilder:FormBuilder,private api:RegisterApiModel,private registerService:RegisterService
  ,private toastsManager:ToastsManager
  ) {

  }

  ngOnInit() {
    this.createForm();
  }

  register(close:HTMLButtonElement){

    this.registerService.register(this.registerForm.value).subscribe(res=>{
      if(res.data){
        this.toastsManager.success("注册成功,请登录","注册结果");
        close.click();
      }else{
        this.toastsManager.error("注册失败,请重试","注册结果");
      }
    });

  }
  createForm(){
    this.registerForm = this.formBuilder.group({
      "sex":["男",[],[]],
      "account":["",[Validators.required, Validators.pattern(this.EMAIL_REGEX)],[]],
      "password":["",[Validators.required, Validators.minLength(6),Validators.maxLength(9)],[]],
      "nickname":["",[Validators.required, Validators.minLength(2),Validators.maxLength(20)],[]],
      "validate":["",[Validators.required,Validators.minLength(4),Validators.maxLength(4)],[(control: FormControl) => {return this.actualVerificationCodeValidator(control, this.registerService)}]]
    });
    this.accountControl = this.registerForm.get("account") as FormControl;
    this.passwordControl = this.registerForm.get("password") as FormControl;
    this.validateControl = this.registerForm.get("validate") as FormControl;
    this.nicknameControl = this.registerForm.get("nickname") as FormControl;
  }

 /**
   * 验证验证码的正确性
   * @param codeControl 验证码输入控件
   * @param registerService 注册服务
   * @returns {any} 可观察的验证信息
   * 返回null数据则表示表单控件验证通过，反之亦然
   */
  actualVerificationCodeValidator(codeControl: FormControl, registerService: RegisterService): Observable<ValidationErrors | null> {
    if (codeControl.value != null && codeControl.value != '') {
      return this.registerService.verificationCodeActually(codeControl.value);
    } else {
      return Observable.of(null);
    }
  }
}
