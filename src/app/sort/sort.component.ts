import { Component, OnInit, Output, Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  tabVal: any;
  tabSelection: any;
  @Input() sortObj;
  @Output() sortParams: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setTab(event){
    this.tabVal = event.tab.textLabel;
    switch(this.tabVal){
      case "Price Low-High": this.sortObj = {
                              key:'price',
                              sortOrder : 'asc'
                            };
                            break;
      case "Price High-Low": this.sortObj = {
                              key:'price',
                              sortOrder : 'desc'
                            };
                            break;
      case "Discount": this.sortObj = {
                        key:'discount',
                        sortOrder : 'desc'
                      };
                      break;
    }
    console.log(event.tab);
    this.sortParams.emit(this.sortObj);
  }

  radioChange(event){
    let val ={
      tab : {
        textLabel : event.value
      }
    }
    this.setTab(val);
  }
}
