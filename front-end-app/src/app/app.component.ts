import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-app';
  localesList = [
    { code: 'pl', lable: "Polski"},
    { code: 'de', lable: "Deutsch"}
  ];
}
