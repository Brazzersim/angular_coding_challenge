import {Products} from '../../../interfaces/body/products.interface';
import {Side} from '../../../interfaces/side/side.interface';

export const SIDE_ELEMENTS: Side[] = [
    {
        title: "SCEGLI PER",
        style: "checkbox",
        elements: [
            {
                description: "Disponibili",
                quantity: 24,
                checked: true
            },
            {
                description: "In promozione",
                quantity: 13,
                checked: true
            }
        ]
    },
    {
        title: "MARCHE",
        style: "checkbox",
        elements: [
            {
                description: "Ariston",
                quantity: 4,
                checked: true
            },
            {
                description: "Baxi",
                quantity: 8,
                checked: true
            },
            {
                description: "Ariston",
                quantity: 12,
                checked: true
            }
        ]
    },
    {
        title: "TIPOLOGIA",
        style: "checkbox",
        elements: [
            {
                description: "A condensazione",
                quantity: 3,
                checked: false
            },
            {
                description: "Camera Aperta",
                quantity: 7,
                checked: false
            },
            {
                description: "Camera Stagna",
                quantity: 4,
                checked: false
            }
        ]
    },
    {
        title: "ALIMENTAZIONE",
        style: "checkbox",
        elements: [
            {
                description: "Elettrica",
                quantity: 11,
                checked: false
            },
            {
                description: "Metano",
                quantity: 1,
                checked: false
            }
        ]
    },
    {
        title: "POTENZA NOMINALE (kW)",
        style: "checkbox",
        elements: [
            {
                description: "19.5",
                quantity: 1,
                checked: false
            },
            {
                description: "24",
                quantity: 5,
                checked: false
            },
            {
                description: "25",
                quantity: 2,
                checked: false
            },
            {
                description: "da 30 a 34",
                quantity: 2,
                checked: false
            }
        ]
    },
    {
        title: "UTILIZZO",
        style: "checkbox",
        elements: [
            {
                description: "Esterno",
                quantity: 4,
                checked: false
            },
            {
                description: "Interno",
                quantity: 3,
                checked: false
            },
            {
                description: "Interno / Esterno",
                quantity: 2,
                checked: false
            }
        ]
    },
    {
        title: "RECENSIONI",
        style: "stars",
        elements: [
            {
                quantity: 3,
                rate: 5,
                tot: 5,
            },
            {
                quantity: 14,
                rate: 4,
                tot: 5,
                checked: true
            },
            {
                quantity: 5,
                rate: 3,
                tot: 5,
            },
            {
                quantity: 1,
                rate: 2,
                tot: 5,
            },
            {
                quantity: 1,
                rate: 1,
                tot: 5,
            }
        ]
    }
];
export const PRODUCT_ELEMENTS: Products[] = [
    {
        id: 1,
        img: "boiler.png",
        brand: "ARISTON",
        description: "Matis condens - Condensing Boiler 24 kW Methane - Indoor",
        price: "1.350,00",
        discount: "1.570,00",
        label: "Risparmi il 20%",
        text_marked: true,
        saved: false
    },
    {
        id: 2,
        img: "boiler.png",
        brand: "ARISTON",
        description: "Genus One Condensing Boiler - 24 kW",
        price: "899,00",
        discount: "927,00",
        label: "Risparmi il 20%",
        text_marked: true,
        saved: false
    },
    {
        id: 3,
        img: "boiler.png",
        brand: "BAXI",
        description: "Luna Duo-Tec Condensing Boiler - 28 kW",
        price: "790,00",
        saved: false
    },
    {
        id: 4,
        img: "boiler.png",
        brand: "BAXI",
        description: "Genus One Condensing Boiler - 24 kW",
        price: "960,00",
        saved: false
    },
    {
        id: 5,
        img: "boiler.png",
        brand: "BAXI",
        description: "Prime Condensing Boiler - 28 kW",
        price: "890,00",
        saved: false
    },
    {
        id: 6,
        img: "boiler.png",
        brand: "ARISTON",
        description: "Matis condens - Condensing Boiler 24 kW Methane - Indoor",
        price: "1.120,00",
        saved: false
    },
    {
        id: 7,
        img: "boiler.png",
        brand: "BAXI",
        description: "Matis condens - Condensing Boiler 24 kW Methane - Indoor",
        price: "790,00",
        discount: "927,00",
        label: "Risparmi il 20%",
        text_marked: true,
        saved: false
    },
    {
        id: 8,
        img: "boiler.png",
        brand: "BAXI",
        description: "Genus One Condensing Boiler - 24 kW",
        price: "960,00",
        saved: false
    },
    {
        id: 9,
        img: "boiler.png",
        brand: "ARISTON",
        description: "Genus One Condensing Boiler - 24 kW",
        price: "899,00",
        discount: "927,00",
        label: "Risparmi il 20%",
        text_marked: true,
        saved: false
    },
    {
        id: 10,
        img: "boiler.png",
        brand: "BAXI",
        description: "Genus One Condensing Boiler - 24 kW",
        price: "960,00",
        saved: false
    },
    {
        id: 11,
        img: "boiler.png",
        brand: "ARISTON",
        description: "Matis condens - Condensing Boiler 24 kW Methane - Indoor",
        price: "1.120,00",
        saved: false
    },
    {
        id: 12,
        img: "boiler.png",
        brand: "BAXI",
        description: "Prime Condensing Boiler - 28 kW",
        price: "890,00",
        saved: false
    }
];
