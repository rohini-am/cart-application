import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  tabVal: any;
  @Output() sortParams: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setTab(event){
    let sortObj;
    this.tabVal = event.tab.textLabel;
    switch(this.tabVal){
      case "Price Low-High": sortObj = {
                              key:'price',
                              sortDec : false
                            };
                            break;
      case "Price High-Low": sortObj = {
                              key:'price',
                              sortDec : true
                            };
                            break;
      case "Discount": sortObj = {
                        key:'discount',
                        sortDec : false
                      };
                      break;
    }
    console.log(event.tab);
    this.sortParams.emit(sortObj);
  }
}
