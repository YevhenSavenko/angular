import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Goods {
  image: string;
  title: string;
  old_price?: number;
  new_price: number;
  rating: number;
}

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasketComponent implements OnInit {
  stars = [1, 2, 3, 4, 5];

  total = 1340;
  goods: Goods[] = [
    {
      image: '/assets/images/header/basket/goods1.svg',
      title: 'Federico Mahora Royal 800 Chanel Test_Content Test_Content',
      old_price: 730,
      new_price: 670,
      rating: 3,
    },
    {
      image: '/assets/images/header/basket/goods2.svg',
      title: 'Federico Mahora Royal 800 Chanel Test_Content Test_Content',
      old_price: 730,
      new_price: 670,
      rating: 5,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
