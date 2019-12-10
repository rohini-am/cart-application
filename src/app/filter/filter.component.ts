import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() priceRange: EventEmitter<any> = new EventEmitter();
  value: number = 0;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    // translate: (value: number, label: LabelType): string => {
    //   switch (label) {
    //     case LabelType.Low:
    //       return '<b>Min price:</b> Rs.' + value;
    //     case LabelType.High:
    //       return '<b>Max price:</b> Rs.' + value;
    //     default:
    //       return 'Rs.' + value;
    //   }
    // }
  };
  constructor() { }

  ngOnInit() {
  }

  setRange(){
    this.priceRange.emit({'value':this.value,'highValue':this.highValue})
  }

}
