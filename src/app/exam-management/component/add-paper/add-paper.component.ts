import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../home/model/user.model';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  constructor(public user:UserModel) {
    console.log(this.user);
   }

  ngOnInit() {
  }

}
