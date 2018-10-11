import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private navScrolled: Boolean;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = $(window).scrollTop();
    if (scrollTop < 100) {
      this.navScrolled = false;
    } else {
      this.navScrolled = true;
    }
  }
}
