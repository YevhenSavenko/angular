import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  images: number[] = [1, 2, 3, 4, 5, 6];
  counter = 1;


  @ViewChild('feedback__body', { read: DragScrollComponent }) card: DragScrollComponent;

  moveLeft(): void {
    this.card.moveLeft();
  }

  moveRight(): void {
    this.card.moveRight();
  }

  counterIncrement(): void {
    this.counter++;
    if (this.counter > this.images.length) {
      this.counter = this.images[0];
    }
  }

  counterDecrement(): void {
    this.counter--;
    if (this.counter < this.images[0]) {
      this.counter = this.images.length;
    }
  }
  hrefImg(num): void {
    this.counter = num;
  }
}
