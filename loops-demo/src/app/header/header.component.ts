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
  navScrolled: Boolean;

  @Input()
  storeDetail: Subject<Object>;

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // let scrollTop = $(window).scrollTop();
    // const doc = document.documentElement;
    // let scrollTop =
    //   (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollTop = window.scrollY;
    // scrollTop = Math.round(scrollTop);
    scrollTop = Math.ceil(scrollTop / 100) * 100;
    if (scrollTop <= 200) {
      this.navScrolled = false;
      console.log(this.navScrolled, scrollTop);
    } else {
      this.navScrolled = true;
      console.log(this.navScrolled, scrollTop);
    }
  }
}
