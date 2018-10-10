import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featureData: Array<object> = [
    {
      title: 'What you want',
      desc: 'What you want Your secret restaurant or any store you know',
      bgColor: '#DCDBFF'
    },
    {
      title: 'Wallet',
      desc: 'Your home ATM',
      bgColor: '#D7FFFE'
    },
    {
      title: 'Favor',
      desc: 'What you need that requires time',
      bgColor: '#FFE1D3'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
