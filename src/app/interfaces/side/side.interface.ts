import {SideElementsInterface} from './elements/side-elements.interface';

export interface Side {
    title: string;
    elements: SideElementsInterface[];    
    style: string;
}
