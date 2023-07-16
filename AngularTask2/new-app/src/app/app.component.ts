import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new-app';
  onSavee = true;
  currentCustomer = 'Ashraf';
  onSave(ev: Event) {
    console.log('Hello', ev);
  }
  clickMessage!: any;
  onKeydown(ev: Event) {
    console.log('keydown event', ev);
  }
  save = true;
}
