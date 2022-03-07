import {Component, OnInit} from '@angular/core';
import {StaticDataService} from '../../../services/static/static-data.component';
import {Products} from '../../../interfaces/body/products.interface';
import {map} from 'rxjs/operators';

@Component({
    selector: 'main-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
    products!: Products[];
    arrSelected: Products[] = [];

    constructor(
        private staticData: StaticDataService
    ) {
    }

    ngOnInit(): void {
        this.products = this.staticData.products;
        this.products.map((value, index)=> {
            let arr = StaticDataService.preferences;
            return value.saved = arr[index].saved;
        });
    }

    saveProduct(index: number) {
        this.products[index].saved = !this.products[index].saved;
       let arr = StaticDataService.preferences;
        
        if(arr.length == 0)
            this.products.forEach((value) => {
                arr.push({id: value.id, saved: value.saved});
            });
        else
            arr[index].saved = this.products[index].saved;
        
        StaticDataService.preferences = arr;
    }
    
    compare(e: any, index: number) {
        if(e.target.checked) 
            this.arrSelected.push(this.products[index]);
        else
            this.arrSelected.splice(this.arrSelected.findIndex(o => o.id == this.products[index].id), 1);

        this.staticData.selection = this.arrSelected;
    }
}
