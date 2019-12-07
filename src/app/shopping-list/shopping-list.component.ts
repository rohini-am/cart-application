import { Component, OnInit, Input } from '@angular/core';
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
  @Input() searchModel:any;
  @Input() sortParams:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList(){
    this.url="https://api.myjson.com/bins/qzuzi";
    this.http.get<any[]>(this.url).subscribe(data => {
      this.shoppingList=data;
      console.log(this.shoppingList);
      //this.sortList();
    });
    
  }

  sortList(){
   // this.shoppingList = this.shoppingList.pipe(map(arr => arr.sort((a,b) => a.price < b.price)));
  }

}
