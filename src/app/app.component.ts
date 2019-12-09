import { Component, Output ,EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
  title = 'cart-application';
  searchModel: string;
  sortObj : any;
  @Output() sortParams: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOninit(){
    console.log(this.sortObj);
  }

  fetchObj(event){
    console.log(event);
    this.sortObj = event;
    this.sortParams.emit(this.sortObj)
  }
  
}
