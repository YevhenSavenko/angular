import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ARRAY_BOOKS } from '../../mock-data-books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("rightButton") rightButton: ElementRef;
  @ViewChild("leftButton") leftButton: ElementRef;
  @ViewChild("modal") modal: ElementRef;

  showModalToggle = false;
  hideModalToggle = true;
  disabledLeft = true;
  disabledRight = false;
  counter = 1;
  minCount = 0;
  maxCount = 10;
  allBooks = this.sliceArray(this.minCount, this.maxCount);

  aboutBook = {
    author: '',
    country: '',
    imageLink: '',
    language: '',
    link: '',
    pages: 0,
    title: '',
    year: 0,
  }


  constructor() { }

  ngOnInit(): void {
  }

  onClickLeftButton(){  
    if(this.maxCount === ARRAY_BOOKS.length){
      if(this.maxCount - this.minCount < 10){
        this.maxCount = ARRAY_BOOKS.length - (this.maxCount - this.minCount);
        this.minCount = this.maxCount - 10;
        console.log(this.minCount, this.maxCount);
      } else {
        this.minCount -= 10;
        this.maxCount -= 10;
      }
    } else {
      this.minCount -= 10;
      this.maxCount -= 10;
    }

    if(this.minCount <= 0){
      this.minCount = 0;
      this.maxCount = 10;
      this.disabledLeft = true;
    }
    this.allBooks = this.sliceArray(this.minCount, this.maxCount);
    this.counter--;
    this.disabledRight = false;
  }

  onClickRightButton(){
    this.minCount += 10;
    this.maxCount += 10;

    if(this.maxCount >= ARRAY_BOOKS.length){
      const temp = ARRAY_BOOKS.length - this.minCount;
      const divide = ARRAY_BOOKS.length - temp;
      this.maxCount = ARRAY_BOOKS.length;
      
      if(this.minCount === 0){
        this.minCount = this.maxCount - this.minCount;
        this.allBooks = this.sliceArray(divide, this.maxCount);
      } else {
        this.allBooks = this.sliceArray(divide, this.maxCount);
      }
      
      this.disabledRight = true;
      this.counter++;
      return;
    }

    this.allBooks = this.sliceArray(this.minCount, this.maxCount);
    this.counter++;
    this.disabledLeft = false;
  }


  sliceArray(min, max){
    return this.allBooks = ARRAY_BOOKS.slice(min, max);
  }

  showModal(item){
    this.aboutBook.author = item.author;
    this.aboutBook.country = item.country;
    this.aboutBook.imageLink = item.imageLink;
    this.aboutBook.language = item.language;
    this.aboutBook.link = item.link;
    this.aboutBook.pages = item.pages;
    this.aboutBook.title = item.title;
    this.aboutBook.year = item.year;
  }

}
