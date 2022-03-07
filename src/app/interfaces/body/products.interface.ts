export interface Products {
    id: number;
    brand: string;
    description: string;
    price: string;
    discount?: string;
    label?: string;
    img: string;
    text_marked?: boolean;
    saved?: boolean;
}
