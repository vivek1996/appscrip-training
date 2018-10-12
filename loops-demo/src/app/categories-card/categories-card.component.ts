import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {
  @Input()
  categoriesData: Subject<Array<object>>;
  constructor() {}

  ngOnInit() {}
}
