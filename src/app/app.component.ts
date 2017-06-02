import { Component } from '@angular/core';
import { uniq } from 'ramda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uniqueData: Array<number>;

  constructor() {
    let data = [1, 2, 1, 2, 3];
    this.uniqueData = uniq(data);
  }
}
