import { Component } from '@angular/core';
import {StaticDataService} from './services/static/static-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
      private staticData: StaticDataService
  ) {
  }

}
