import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';


@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {



  @ViewChild('benefits__slider', { read: DragScrollComponent }) card: DragScrollComponent;

  moveLeft(): void {
    this.card.moveLeft();
  }

  moveRight(): void {
    this.card.moveRight();
  }


}


