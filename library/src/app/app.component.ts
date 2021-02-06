import { Component } from '@angular/core';
import { ARRAY_BOOKS } from '../mock-data-books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  array = ARRAY_BOOKS;
}
