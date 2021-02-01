import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor() {}

  @ViewChild('brands', { read: DragScrollComponent })
  brands: DragScrollComponent;

  ngOnInit(): void {}

  moveLeft(): void {
    this.brands.moveLeft();
  }

  moveRight(): void {
    this.brands.moveRight();
  }
}
