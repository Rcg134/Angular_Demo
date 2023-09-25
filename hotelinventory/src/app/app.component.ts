import { Component } from '@angular/core';

@Component({
  selector: 'ake-root',
  templateUrl: './app.component.html',
  // template: `<h1>namo</h1>
  //   <h1>ahahhahah</h1>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Admin';
}
