import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'cart-application';
  searchModel: string;
  sortParams : any;
  // @Output() searchModal: EventEmitter<{}> = new EventEmitter();

  ngOninit(){
    console.log(this.sortParams);
  }
}
