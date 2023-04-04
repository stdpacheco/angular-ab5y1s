import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
   locationVsStatusMap = new Map();

   constructor(){
     this.locationVsStatusMap.set(1, {
        id: 1,
        status: 'Open'
      });

this.locationVsStatusMap.set(2, {
        id: 1,
        status: 'Close'
      });
this.locationVsStatusMap.set(3, {
        id: 1,
        status: 'Pending'
      });
   }



  
}
