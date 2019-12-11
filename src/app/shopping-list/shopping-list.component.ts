import { Component, OnInit, Input, SimpleChanges,ChangeDetectorRef ,Output,EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  url:string;
  shoppingList :any;
  displayList: any;
  cartProducts:any=[];
  sortType:any = {key:'price',sortOrder:'asc'}
  @Input() searchModel:any;
  @Input() sortParams:any;
  @Input() priceRange:any;
  @Output() checkoutCart: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private ref:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.sortParams && changes.sortParams.currentValue){
      this.sortType = changes.sortParams.currentValue;     
      //this.sortList(this.sortType);
      this.ref.detectChanges();
    } else if(changes.priceRange && changes.priceRange.currentValue){
      this.fetchObjRange(changes.priceRange.currentValue);
    }  
  }

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList(){
    this.url="https://api.myjson.com/bins/qzuzi";
    this.http.get<any[]>(this.url).subscribe(data => {
      this.shoppingList=data;
      this.displayList=data;
      //this.sortList({key:'price',sortDesc:false});
    });
    
  }

  fetchObjRange(rangeObj){
    console.log('Range: '+rangeObj)
    this.displayList = this.shoppingList
    .filter(function(obj) {
      return (obj.price <= rangeObj.highValue && obj.price >= rangeObj.value);
    });
    this.ref.detectChanges();
  }

  addProduct(product){
    this.cartProducts.push(product);
    //product.count = product.count+1;
    product.added = true;
    this.checkoutCart.emit(this.cartProducts);
    console.log(this.cartProducts)
  }

  removeProduct(product){
    //product.count = 0;
    product.added = false;
      this.cartProducts.filter((pdt,i)=>{
        if(pdt.id == product.id){
          this.cartProducts.splice(i,1);
        }
      })
      this.checkoutCart.emit(this.cartProducts);
      console.log(this.cartProducts)
  }

}
