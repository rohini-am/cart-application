import { Component, Output ,EventEmitter, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
  title = 'cart-application';
  searchModel: string;
  sortObj : any;
  rangeObj:any;
  showCart:boolean = false;
  checkoutItems:any=[];
  @Output() sortParams: EventEmitter<any> = new EventEmitter(); 
  @Output() priceRange: EventEmitter<any> = new EventEmitter();
  @Output() checkoutCart: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  constructor(private router:Router){}

  ngOninit(){
    console.log(this.sortObj);
  }

  fetchObj(event){
    console.log(event);
    this.sortObj = event;
    this.sortParams.emit(this.sortObj)
  }

  getRange(event){
    this.rangeObj = event;
    this.priceRange.emit(this.rangeObj);
  }

  getCartItems(event){
    this.checkoutItems = event;
    if(this.checkoutItems.length<1){
      this.showCart = false;
    }
  }

  cartItems(){
    this.showCart = true;
    this.checkoutCart.emit(this.checkoutItems);
  //this.router.navigate(['/cart']);
  }
  
}
