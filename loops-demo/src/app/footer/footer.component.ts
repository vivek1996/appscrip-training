import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  featuresFooter: Array<Object> = [
    {
      title: 'Best Prices & Offers',
      desc:
        'Cheaper prices than your local supermarket, great cashback offers to top it off.',
      image: 'fa-tags'
    },
    {
      title: 'Wide Assortment',
      desc:
        'Choose from 5000+ products across food, personal care, household & other categories.',
      image: 'fa-cubes'
    },
    {
      title: 'Easy Returns',
      desc:
        'Not satisfied with a product? Return it at the doorstep & get a refund within hours.',
      image: 'fa-rupee-sign'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
