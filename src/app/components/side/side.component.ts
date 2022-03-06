import {Component, Input, OnInit} from '@angular/core';
import {Side} from '../../interfaces/side/side.interface';
import {StaticDataService} from '../../services/static/static-data.component';

@Component({
    selector: 'side-root',
    templateUrl: './side.component.html',
    styleUrls: ['./side.component.scss']
})
export class SideComponent implements  OnInit {
    public sideElements: Side[];

    constructor(
        private staticData: StaticDataService
    ) {
        this.sideElements = this.staticData.sideElements;
    }
    
    ngOnInit() {
    }
}
