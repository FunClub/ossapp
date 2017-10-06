import { DragulaService } from 'ng2-dragula';
import { MenuModel } from './../../model/menu.model';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.css']
})
export class MenuSelectorComponent implements OnInit {
  @Input()
  public menus:Array<MenuModel>;
  @Input()
  public checkedMenus:Array<MenuModel>;
  constructor() { 
   
  }
  ngOnInit() {
  }
 
}
