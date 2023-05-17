import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount=0;

  constructor(private ngxspinner:NgxSpinnerService) { 


  }
  busy(){
    this.busyRequestCount++;

   this.ngxspinner.show();
  }

  idle(){
    this.busyRequestCount --;
    if(this.busyRequestCount <=0){
      this.busyRequestCount=0;
      this.ngxspinner.hide();
    }
  }

}
