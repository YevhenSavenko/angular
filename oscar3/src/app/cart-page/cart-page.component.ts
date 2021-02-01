import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartPageComponent implements OnInit {

  total = 1;

  constructor() { }

  ngOnInit(): void {
  }

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

}
