import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {

  togglePrice = false;
  toggleBrand = false;
  toggleColor = false;
  toggleManufacturer = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event): void {
    event.stopPropagation();
  }

}
