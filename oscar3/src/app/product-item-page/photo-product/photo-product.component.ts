import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo-product',
  templateUrl: './photo-product.component.html',
  styleUrls: ['./photo-product.component.scss']
})
export class PhotoProductComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  @ViewChild('photo', { read: DragScrollComponent })
  photo: DragScrollComponent;

  ngOnInit(): void {}

  moveLeft(): void {
    this.photo.moveLeft();
  }

  moveRight(): void {
    this.photo.moveRight();
  }

  getWidthDrag(element: HTMLElement): any {
    return `${element.clientWidth}px`;
  }

}
