import { Component, OnInit } from '@angular/core';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit() {
  }

}
