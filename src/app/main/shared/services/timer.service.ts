import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private source= _window();

  constructor() { }
  SetTimer(s:any){
    this.clearTimer();
     this.source.timer=s;
   }
   clearTimer(){
     if(this.source.timer){
      window.clearTimeout(this.source.timer);
     }
     if(this.source.timer){
       window.clearInterval(this.source.timer);
     }
   }
}
function _window() : any {
  // return the global native browser window object
  return window;
}