import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {PRODUCT_ELEMENTS, SIDE_ELEMENTS} from './data/data';
import {Side} from '../../interfaces/side/side.interface';
import {Products} from '../../interfaces/body/products.interface';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class StaticDataService {
    private sideElementsArr: Side[];
    private productElementsArr: Products[];
    private selection$: BehaviorSubject<Products[] | any> = new BehaviorSubject([]); 

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
    
    get selection(): Products[] {
        return this.selection$.getValue();
    }
    
    set selection(products: Products[]) {
        this.selection$.next(products);
    }
    
    get selection_$() {
        return this.selection$.asObservable();
    }
    
    
    static get preferences() {
        let preferences = localStorage.getItem('preferences') || [];
        return  typeof(preferences) == "string" ? JSON.parse(preferences) : [];
    }
    
    static set preferences(data) {
        localStorage.setItem('preferences', JSON.stringify(data));
    }
}
