import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigateComponent implements OnInit {
  openBrow = false;

  constructor() {}

  ngOnInit(): void {}
}
