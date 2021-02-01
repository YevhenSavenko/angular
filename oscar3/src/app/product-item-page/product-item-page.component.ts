import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { trigger, transition, useAnimation,} from '@angular/animations';
import { slideInRight, slideOutLeft } from 'ng-animate';

export interface SimilarProduct {
  image: string;
  title: string;
  old_price?: number;
  new_price: number;
  rating: number;
}

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrls: ['./product-item-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounceRight', [
      transition('void => *', useAnimation(slideInRight)),
      transition('* => void', useAnimation(slideOutLeft)),
    ]),
  ],
})
export class ProductItemPageComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  rating = 2;
  maxStar = 5;
  total = 1;
  colors = ['Red', 'Blue', 'Yellow', 'Orange'];
  sizes = ['Size S +65$', 'Size M +105$', 'Size L +125$', 'Size XL +165$'];
  selected = 'option2';
  sizeDafault = 'Please select size';
  colorDafault = 'Please select color';

  menuDefault = 'Description';
  menuProducts = [
    'Description',
    'Product details',
    'Photo&Video product',
    'Reviews',
  ];
  description = true;
  details = false;
  photoVideo = false;
  reviews = false;

  onSimilar: SimilarProduct[] = [
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

  onIncr(): void {
    this.total++;
    if (this.total === 99) {
      this.total = 99;
    }
  }

  onDecr(): void {
    this.total--;
    if (this.total <= 1) {
      this.total = 1;
    }
  }

  getWidth(element: HTMLElement): any {
    return `${element.clientWidth - 40}px`;
  }

  getWidthSelect(element: HTMLElement): any {
    return `${element.clientWidth - 20}px`;
  }

  handleClick(event): void {
    event.stopPropagation();
  }

  onDescription = () => {
    setTimeout(() => {
      this.description = true;
    }, 1000);
    this.menuDefault = 'Description';
    this.details = this.photoVideo = this.reviews = false;
  }

  onDetails = () => {
    setTimeout(() => {
      this.details = true;
    }, 1000);
    this.menuDefault = 'Product details';
    this.description = this.photoVideo = this.reviews = false;
  }

  onPhotoVideo = () => {
    setTimeout(() => {
      this.photoVideo = true;
    }, 1000);
    this.menuDefault = 'Photo&Video product';
    this.details = this.description = this.reviews = false;
  }

  onReviews = () => {
    setTimeout(() => {
      this.reviews = true;
    }, 1000);
    this.menuDefault = 'Reviews';
    this.details = this.photoVideo = this.description = false;
  }

  selectSize = (size) => {this.sizeDafault = size; };
  selectColor = (color) => {this.colorDafault = color; };
}
