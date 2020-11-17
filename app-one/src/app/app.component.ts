import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';

  value: number = 5;

  delete: boolean = false;

  changeValue() {
    this.value++;
  }

  destroyCicle() {
    this.delete = true;
  }
}
