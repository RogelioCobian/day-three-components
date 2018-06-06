import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  componentSelected: boolean = false;
  // selectComponent;
  index: number;

  selectComponent() {
    this.componentSelected = true;
    // const index = Math.floor(Math.random() * 3);
    this.index = Math.floor(Math.random() * 3);
    console.log('index', this.index);
  //   if (!index) {
  //     // this.componentSelected = 'warning';
  //   }
  //   if (index == 1) {
  //     // this.selectComponent = 'success';
  //   }
  //   if (index == 2) {
  //     // this.selectComponent = 'danger';
  //   }
  // }

  }
}
