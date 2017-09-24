import { HomeService } from './../../service/home.service';
import { UserModel } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';

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
