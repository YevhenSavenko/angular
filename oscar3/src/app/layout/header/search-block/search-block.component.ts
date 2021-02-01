import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface SelectCategories{
  name: string;
}

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBlockComponent implements OnInit {

  defaultCategory = 'All Categories';

  allCategories: SelectCategories[] = [
    {name: 'All Categories'},
    {name: 'Bags'},
    {name: 'Collections'},
    {name: 'Jewelry'},
    {name: 'New Arrivals'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCategories(name): void {
    this.defaultCategory = name;
  }

}
