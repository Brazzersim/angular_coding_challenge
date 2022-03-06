import { Component } from '@angular/core';
import {StaticDataService} from '../../services/static/static-data.component';

@Component({
    selector: 'body-root',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {

    constructor(
        private staticData: StaticDataService
    ) {
    }

}
