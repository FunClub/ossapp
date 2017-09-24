import { ToastsManager } from 'ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <ng-progress [positionUsing]="'marginLeft'" [minimum]="0.15" [maximum]="1"
               [speed]="'200'" [showSpinner]="'true'" [direction]="'rightToRightIncreased'"
               [color]="'red'" [trickleSpeed]="250" [thick]="false" [ease]="'linear'"
  ></ng-progress>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private toastsManager:ToastsManager,vcr: ViewContainerRef){
    toastsManager.setRootViewContainerRef(vcr);
  }
}
