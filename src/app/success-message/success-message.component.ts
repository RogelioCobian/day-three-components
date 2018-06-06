import { Component, OnInit } from '@angular/core';

//  export class ChangeColors {
//   colorSwitch: string;
//   constructor(xColor: string ) {
//     this.colorSwitch = xColor;
//   }
// }

@Component({
  selector: '[app-success-message]',
  templateUrl: './success-message.component.html',
  styles: ['h2 {background-color: red; color: white;}']
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const colorOne = new ChangeColors('red');
  }

}
