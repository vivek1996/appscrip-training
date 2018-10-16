import {
  Component,
  OnInit,
  HostListener,
  Input,
  OnChanges
} from '@angular/core';
import * as $ from 'jquery';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  navScrolled: Boolean = false;

  @Input()
  storeDetail: Subject<Object>;

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scrollTop = window.scrollY;
    // scrollTop = Math.round(scrollTop);
    scrollTop = Math.ceil(scrollTop / 100) * 100;
    if (scrollTop <= 200 && scrollTop <= 500) {
      this.navScrolled = false;
      $('.js-header').addClass('d-block');
      console.log(this.navScrolled, scrollTop);
    } else {
      this.navScrolled = true;
      $('.js-header').removeClass('d-none');
      console.log(this.navScrolled, scrollTop);
    }
  }
}
