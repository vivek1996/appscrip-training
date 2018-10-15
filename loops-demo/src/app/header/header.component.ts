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
    const scrollTop = $(window).scrollTop();
    if (scrollTop <= 150) {
      this.navScrolled = false;
      console.log(this.navScrolled);
    } else {
      this.navScrolled = true;
      console.log(this.navScrolled);
    }
  }
}
