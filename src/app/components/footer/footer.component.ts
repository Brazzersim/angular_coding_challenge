import {Component, OnInit, TemplateRef} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {StaticDataService} from '../../services/static/static-data.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'footer-root',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [
        trigger('showHide', [
            state('show', style({
                height: '65px'
            })),
            state('hide', style({
                height: '0px',
            })),
            transition('show => hide', [
                animate('0.1s')
            ]),
            transition('hide => show', [
                animate('0.2s')
            ]),
        ]),
    ],
})
export class FooterComponent implements OnInit{
    num_prod: number = 3;
    isOpen = true;

    constructor(
        public staticData: StaticDataService,
        private modalService: NgbModal
    ) {
    }
    
    ngOnInit(): void {
        this.staticData.selection_$.subscribe(selection => {
            selection.length == 0 ? this.isOpen = false : this.isOpen =  true; this.num_prod = (3 - selection.length); 
        });
    }
    
    openModal(content: TemplateRef<any>) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        }, (reason) => {
        });
    }
    
}
