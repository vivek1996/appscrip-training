import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {
  categoriesData: Array<object> = [
    { title: 'Electronics', desc: 'Electronics', image: 'fa-bolt' },
    // tslint:disable-next-line:max-line-length
    {
      title: 'Biscuits, Snacks & Chocolates',
      desc:
        'Biscuits & Chocolates Offers,Biscuits & Cookies, Namkeen & Snacks,Chips &Crisps',
      image: 'fa-cookie'
    },
    // tslint:disable-next-line:max-line-length
    {
      title: 'Beverages',
      desc:
        'Beverages Best Offers, Soft Drinks, Juices & Concentrates, Tea & Coffee, Health & Energy.',
      image: 'fa-beer'
    },
    // tslint:disable-next-line:max-line-length
    {
      title: 'Personal Care',
      desc:
        'Personal Care Best Offers, Bath & Body, Hair Care, Skin Care, Oral Care, Deos & Perfumes',
      image: 'fa-grin-hearts'
    },
    // tslint:disable-next-line:max-line-length
    {
      title: 'Noodles, Sauces & Instant Food',
      desc:
        'Noodles & Sauces Best Offers, Chyawanprash & Healtth Foods, Noodles & Vermicelli, Sauces & Ketchups.',
      image: 'fa-utensils'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
