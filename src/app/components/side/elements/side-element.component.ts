import {Component, Input, OnInit} from '@angular/core';
import {Side} from '../../../interfaces/side/side.interface';

@Component({
    selector: 'side-element-root',
    templateUrl: './side-element.component.html',
    styleUrls: ['./side-element.component.scss']
})
export class SideElementComponent implements OnInit{
    @Input("elements") elements!: Side[];
    checked: boolean = false;
    
    constructor() {
    }
    
    ngOnInit(): void {
        console.log(this.elements);
    }
}
