import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  url:string;
  shoppingList :any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList(){
    this.url="https://api.myjson.com/bins/qzuzi";
    this.http.get<any[]>(this.url).subscribe(data => {
      this.shoppingList=data;
      console.log(this.shoppingList);
    })
  }

}
