import { Component, OnInit, Input, SimpleChanges,ChangeDetectorRef } from '@angular/core';
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
  sortType:any
  @Input() searchModel:any;
  @Input() sortParams:any;
  constructor(private http: HttpClient, private ref:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.sortParams && changes.sortParams.currentValue){
      this.sortType = changes.sortParams.currentValue;     
      this.sortList(this.sortType);
    }
    
    
  }

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList(){
    this.url="https://api.myjson.com/bins/qzuzi";
    this.http.get<any[]>(this.url).subscribe(data => {
      this.shoppingList=data;
      console.log(this.shoppingList);
      this.sortList({key:'price',sortDesc:false});
    });
    
  }

  sortList(val){
   // this.shoppingList = this.shoppingList.pipe(map(arr => arr.sort((a,b) => a.price < b.price)));
   if(val.key == 'price' && val.sortDesc){
    this.shoppingList = this.shoppingList.sort((a, b) => (a.price < b.price) ? 1 : -1);
    this.ref.detectChanges();
   } else if(val.key == 'price' && !val.sortDesc){
    this.shoppingList = this.shoppingList.sort((a, b) => (a.price > b.price) ? 1 : -1);
    this.ref.detectChanges();
   }else if(val.key == 'discount'){
    this.shoppingList = this.shoppingList.sort((a, b) => (a.discount < b.discount) ? 1 : -1);
    this.ref.detectChanges();
   }
   
  }

  sortListReverse(val){

  }

}
