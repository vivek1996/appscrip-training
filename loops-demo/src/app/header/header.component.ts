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
  private navScrolled: Boolean;

  @Input()
  storeDetail: Subject<Object>;

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop < 150) {
      this.navScrolled = false;
    } else {
      this.navScrolled = true;
    }
  }
}
