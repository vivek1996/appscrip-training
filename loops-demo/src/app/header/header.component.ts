import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked() {
    function resizeHeaderOnScroll() {
      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        headerEl = document.getElementById('js-header');
      if (distanceY > shrinkOn) {
        headerEl.classList.add('smaller');
      } else {
        headerEl.classList.remove('smaller');
      }
    }
    window.addEventListener('scroll', resizeHeaderOnScroll);
  }
  constructor() {}

  ngOnInit() {}
}
