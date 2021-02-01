import { Component, OnInit } from '@angular/core';

export interface BestProduct {
  image: string;
  title: string;
  old_price?: number;
  new_price: number;
  rating: number;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products: BestProduct[] = [
    {
      image: '/assets/images/products/bestProduct/product1.svg',
      title: 'Federico Mahora Pure Royal 800 Chanel',
      old_price: 185,
      new_price: 85,
      rating: 4,
    },
    {
      image: '/assets/images/products/bestProduct/product2.svg',
      title: 'Collistar Silk Effect Compact Powder',
      old_price: 350,
      new_price: 250,
      rating: 2,
    },
     {
      image: '/assets/images/products/bestProduct/product3.svg',
      title: 'Collistar Silk Effect Compact Powder',
      old_price: 350,
      new_price: 250,
      rating: 2,
    },
    {
      image: '/assets/images/products/bestProduct/product4.svg',
      title: 'Yves Saint Laurent Opium',
      old_price: 730,
      new_price: 640,
      rating: 4,
    },
    {
      image: '/assets/images/products/bestProduct/product5.svg',
      title: 'Ciaté London Astrolights Eyeshadow Palette',
      old_price: 330,
      new_price: 299,
      rating: 4,
    },
    {
      image: '/assets/images/products/bestProduct/product6.svg',
      title: 'First Aid Beauty Hello FAB Bendy Avocado Concealer 4.8g',
      old_price: 170,
      new_price: 140,
      rating: 2,
    },
    {
      image: '/assets/images/products/bestProduct/product7.svg',
      title: 'Anastasia Beverly Hills Glitter Adhesive 8.5g',
      old_price: 600,
      new_price: 500,
      rating: 3,
    },
    {
      image: '/assets/images/products/bestProduct/product8.svg',
      title: 'Sleek MakeUP iDivine Eyeshadow Palette 3am 9g',
      old_price: 1930,
      new_price: 1700,
      rating: 4,
    },
  ];

  onSaleProducts: BestProduct[] = [
    {
      image: '/assets/images/products/onSale/product9.svg',
      title: 'Cacharel Anais Anais L\'Original',
      old_price: 370,
      new_price: 320,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product10.svg',
      title: 'Salvador Dali Dali Parfum de Toilette',
      old_price: 110,
      new_price: 99,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product11.svg',
      title: 'La Petite Robe Noire Lip Colourink',
      old_price: 675,
      new_price: 510,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product12.svg',
      title: ' Elizabeth Arden Sunflowers',
      old_price: 185,
      new_price: 85,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product13.svg',
      title: 'Giorgio Armani Acqua di Gio',
      old_price: 1250,
      new_price: 1000,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product14.svg',
      title: 'Collistar Silk Effect Compact',
      old_price: 880,
      new_price: 700,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product15.svg',
      title: 'Acura Z38-1092 Alternator',
      old_price: 185,
      new_price: 85,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product16.svg',
      title: 'IsaDora Ultra Cover Compact',
      old_price: 230,
      new_price: 150,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product17.svg',
      title: 'IsaDora Ultra Cover Compact',
      old_price: 230,
      new_price: 150,
      rating: 4,
    },
    {
      image: '/assets/images/products/onSale/product18.svg',
      title: 'Federico Mahora Pure Royal 800 Chanel',
      old_price: 270,
      new_price: 220,
      rating: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
