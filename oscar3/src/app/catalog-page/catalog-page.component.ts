import { Component, OnInit } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export interface EyeshadowProduct {
  image: string;
  title: string;
  old_price?: number;
  new_price: number;
  rating: number;
}

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})

export class CatalogPageComponent {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  productsForEyes: EyeshadowProduct[] = [
    {
      image: '/assets/images/catalog-page/product1.svg',
      title: 'Federico Mahora Pure Royal 800 Chanel',
      old_price: 185,
      new_price: 85,
      rating: 0,
    },
    {
      image: '/assets/images/catalog-page/product2.svg',
      title: 'Collistar Silk Effect Compact Powder',
      old_price: 350,
      new_price: 250,
      rating: 2,
    },
    {
      image: '/assets/images/catalog-page/product3.svg',
      title: 'Artdeco Hydra Mineral Compact Foundation',
      old_price: 2200,
      new_price: 1900,
      rating: 3,
    },
    {
      image: '/assets/images/catalog-page/product4.svg',
      title: 'Yves Saint Laurent Opium',
      old_price: 730,
      new_price: 670,
      rating: 5,
    },
    {
      image: '/assets/images/catalog-page/product5.svg',
      title: 'Ciaté London Astrolights Eyeshadow Palette ',
      old_price: 330,
      new_price: 299,
      rating: 3,
    },
    {
      image: '/assets/images/catalog-page/product6.svg',
      title: 'First Aid Beauty Hello FAB Bendy Avocado Concealer 4.8g',
      old_price: 170,
      new_price: 140,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product7.svg',
      title: 'Anastasia Beverly Hills Glitter Adhesive 8.5g',
      old_price: 600,
      new_price: 500,
      rating: 2,
    },
    {
      image: '/assets/images/catalog-page/product8.svg',
      title: 'Sleek MakeUP iDivine Eyeshadow Palette 3am 9g',
      old_price: 1930,
      new_price: 1700,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product9.svg',
      title: 'Cacharel Anais Anais L\'Original',
      old_price: 370,
      new_price: 320,
      rating: 5,
    },
    {
      image: '/assets/images/catalog-page/product10.svg',
      title: 'Salvador Dali Dali Parfum de Toilette',
      old_price: 110,
      new_price: 99,
      rating: 2,
    },
    {
      image: '/assets/images/catalog-page/product11.svg',
      title: 'La Petite Robe Noire Lip Colourink',
      old_price: 675,
      new_price: 510,
      rating: 3,
    },
    {
      image: '/assets/images/catalog-page/product12.svg',
      title: ' Elizabeth Arden Sunflowers',
      old_price: 185,
      new_price: 85,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product13.svg',
      title: 'Giorgio Armani Acqua di Gio',
      old_price: 1200,
      new_price: 1000,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product14.svg',
      title: 'Collistar Silk Effect Compact',
      old_price: 880,
      new_price: 700,
      rating: 5,
    },
    {
      image: '/assets/images/catalog-page/product15.svg',
      title: 'Acura Z38-1092 Alternator',
      old_price: 185,
      new_price: 85,
      rating: 2,
    },
    {
      image: '/assets/images/catalog-page/product16.svg',
      title: 'IsaDora Ultra Cover Compact',
      old_price: 230,
      new_price: 150,
      rating: 5,
    },
    {
      image: '/assets/images/catalog-page/product17.svg',
      title: 'Courreges de Empreinte',
      old_price: 35,
      new_price: 20,
      rating: 3,
    },
    {
      image: '/assets/images/catalog-page/product18.svg',
      title: 'Federico Mahora Pure Royal 800 Chanel',
      old_price: 270,
      new_price: 220,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product19.svg',
      title: 'Huda Beauty Power Bullet Matte Lipstick 3g',
      old_price: 100,
      new_price: 90,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product20.svg',
      title: 'Huda Beauty The New Nude Eyeshadow',
      old_price: 200,
      new_price: 190,
      rating: 4,
    },
    {
      image: '/assets/images/catalog-page/product21.svg',
      title: 'Cacharel Anais Anais L\'Original',
      old_price: 990,
      new_price: 800,
      rating: 2,
    },
    {
      image: '/assets/images/catalog-page/product22.svg',
      title: 'Urban Decay Naked Skin Weightless Complete',
      old_price: 170,
      new_price: 145,
      rating: 5,
    },
    {
      image: '/assets/images/catalog-page/product23.svg',
      title: 'Giorgio Armani Luminous Silk Foundation 30ml',
      old_price: 690,
      new_price: 500,
      rating: 3,
    },
  ];

}
