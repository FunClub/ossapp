import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../share/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public navOpened:boolean;
  public user:UserModel;
  constructor(public homeService:HomeService) {
    this.navOpened=true;
    this.user = homeService.user;
   }

  ngOnInit() {
  }

}
