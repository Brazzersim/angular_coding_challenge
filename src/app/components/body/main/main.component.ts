import {Component, OnInit} from '@angular/core';
import {StaticDataService} from '../../../services/static/static-data.component';
import {Products} from '../../../interfaces/body/products.interface';

@Component({
    selector: 'main-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
    products!: Products[];

    constructor(
        private staticData: StaticDataService
    ) {
    }

    ngOnInit(): void {
        this.products = this.staticData.products;
    }
}
