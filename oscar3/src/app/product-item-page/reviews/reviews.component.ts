import { FormControl, Validators } from '@angular/forms';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

export interface Reviews{
  name: string;
  date: string;
  reviews: string;
  title: string;
  images: string;
  rating: number;
  quality: number;
  value: number;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewsComponent implements OnInit {

  titleControl = new FormControl('', [
    Validators.required,
  ]);
  nameControl = new FormControl('', [
    Validators.required,
  ]);
  commentsControl = new FormControl('', [
    Validators.required,
  ]);
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  defaultRating = 'Rate the product';
  rating = [1, 2, 3, 4, 5];

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  result = 0;
  stars = [1, 2, 3, 4, 5];

  exposition: Reviews[] = [
    {
      images: '/assets/images/item/reviews/image1.svg',
      name: 'John Martinson',
      date:  '2020-09-01T14:32:14',
      reviews: `I have used this make up in the Fresco shade for more years than
                I can remember. I have tried samples of other products along the way but
                nothing comes close to this for both finish and staying power. You do need to used a really good moisture
                base first (I use their Daywear) to get the best results.`,
      title:  'Have used for years as it is the best',
      rating: 4,
      quality: 4,
      value: 5
     },
     {
      images: '/assets/images/item/reviews/image2.svg',
      name: 'Nicole WilKinson',
      date:  '2020-09-09T23:15:14',
      reviews: `The coverage is not as full as expected - that’s a good thing because it is
                quite heavy feeling on the skin. But boy oh boy, does it last! It’s the only foundation
                I’ve ever used that still looks the same 8 hours after applying. The biggest negative for
                me is that the particular brands of concealers I use do not blend well over this at all
                (Tarte Shape Tape and Mac Pro Longwear).`,
      title:  'Lasts and lasts',
      rating: 2,
      quality: 3,
      value: 3,
     },
     {
      images: '/assets/images/item/reviews/image3.png',
      name: 'Richard Hardman',
      date:  '2020-08-01T14:32:14',
      reviews: `I have used this make up in the Fresco shade for more years than
                I can remember. I have tried samples of other products along the way but
                nothing comes close to this for both finish and staying power. You do need to used a really good moisture
                base first (I use their Daywear) to get the best results.`,
      title:  'Have used for years as it is the best',
      rating: 4,
      quality: 5,
      value: 4,
     },
     {
      images: '/assets/images/item/reviews/image4.png',
      name: 'Nicole WilKinson',
      date:  '2020-08-15T14:32:14',
      reviews: `I have used this make up in the Fresco shade for more years than
                I can remember. I have tried samples of other products along the way but
                nothing comes close to this for both finish and staying power. You do need to used a really good moisture
                base first (I use their Daywear) to get the best results.`,
      title:  'Lasts and lasts',
      rating: 5,
      quality: 5,
      value: 5,
     },
     {
      images: '/assets/images/item/reviews/image5.png',
      name: 'Thomas Little',
      date:  '2020-09-01T14:32:14',
      reviews: `The coverage is not as full as expected - that’s a good thing because it is quite
                heavy feeling on the skin. But boy oh boy, does it last! It’s the only foundation
                I’ve ever used that still looks the same 8 hours after applying. The biggest negative
                for me is that the particular brands of concealers I use do not blend well over this at all
                (Tarte Shape Tape and Mac Pro Longwear)`,
      title:  'Lasts and lasts',
      rating: 2,
      quality: 3,
      value: 3,
     }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calcDate(date): any{
    const seconds = 60;
    const today = Date.now();
    date = (today - Date.parse(date)) / 1000;

    if (date < seconds) {
      return  Math.floor(date) + ' ' + (Math.floor(date) === 1 ? 'second' : 'seconds');
    } else if (date < (seconds * seconds) && date >= seconds) {
      return  Math.floor(date / (seconds)) + ' ' + (Math.floor(date) / (seconds) === 1 ? 'minute' : 'minutes');
    } else if (date >= (seconds * seconds) && date < (seconds * seconds * 24)) {
      return  Math.floor(date / (seconds * seconds)) + ' ' + (Math.floor(date) / (seconds * seconds) === 1 ? 'hour' : 'hours');
    } else if (date >= (seconds * seconds * 24)) {
      return Math.floor(date / (seconds * seconds * 24)) + ' ' + (Math.floor(date) / (seconds * seconds * 24) === 1 ? 'day' : 'days');
    }
  }

  getResult(num1, num2): void{
    this.result = Math.ceil((num1 + num2) / 2);
  }

  selectRating(num): void{
    this.defaultRating = num;
  }

  getWidthSelect(element: HTMLElement): any {
    return `${element.clientWidth - 40}px`;
  }

}
