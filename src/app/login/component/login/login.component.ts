import { RegisterService } from './../../../register/service/register.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {MdDialog} from "@angular/material";
import {RegisterComponent} from "../../../register/component/register/register.component";
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('flyXInOutFromTop', [
      transition('void => *', [
        animate("500ms",keyframes([
          style({opacity: 0, transform: 'translate(-50%,-20%)'}),
          style({opacity: 0.5, transform: 'translate(-50%,-30%)'}),
          style({opacity: 1, transform: 'translate(-50%,-50%)'})
        ]))
      ]),
      transition('* => void', [
        animate("1300ms",keyframes([
          style({opacity: 0, transform: 'translate(-50%,-20%)', offset: 0}),
          style({opacity: 0.5, transform: 'translate(-50%,-30%)',  offset: 0.3}),
          style({opacity: 1, transform: 'translate(-50%,-50%)',     offset: 1.0})
        ]))
      ])
    ]),
  trigger('flyXInOutFromRight', [
    transition('void => *', [
      animate("500ms",keyframes([
        style({opacity: 0, transform: 'translateX(5%)', offset: 0}),
        style({opacity: 0.5, transform: 'translateX(5px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),

  ]),
  ]
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  public isAdmin:boolean;
  constructor(private dialog:MdDialog,private toastsManager:ToastsManager,private formBuilder:FormBuilder,
  private loginService:LoginService,private router:Router
  ) {
   this.isAdmin =false;
  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      "account":[""],
      "password":[""],
    });
   
  }
  adminToggle(event){
    this.isAdmin = event.source.checked;
  }
  login(loginInfo){
    this.loginForm.value.admin=this.isAdmin;
    this.loginService.login(this.loginForm.value).subscribe(res=>{
      if(res.data){
        this.router.navigateByUrl("home")
      }else{
        this.toastsManager.error("帐号或密码错误,请重试!","登陆结果");
      }
    });
  }
  openRegisterDialog(){
    this.dialog.open(RegisterComponent,{
      hasBackdrop:false
    });
  }
}
