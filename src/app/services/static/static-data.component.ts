import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {PRODUCT_ELEMENTS, SIDE_ELEMENTS} from './data/data';
import {Side} from '../../interfaces/side/side.interface';
import {Products} from '../../interfaces/body/products.interface';


@Injectable({
    providedIn: 'root'
})
export class StaticDataService {
    private sideElementsArr: Side[];
    private productElementsArr: Products[];

    constructor(
    ) {
        this.sideElementsArr = SIDE_ELEMENTS;
        this.productElementsArr = PRODUCT_ELEMENTS;
    }
    
    get sideElements() {
        return this.sideElementsArr;
    }

    get products() {
        return this.productElementsArr;
    }
}
