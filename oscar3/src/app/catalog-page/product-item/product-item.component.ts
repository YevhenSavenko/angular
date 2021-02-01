import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  maxStars = 5;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
