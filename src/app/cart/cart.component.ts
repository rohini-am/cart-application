import { Component, OnInit, SimpleChanges, Input, ChangeDetectorRef,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() checkoutCart:any;
  @Input() searchModel:any;
  @Output() cartItems: EventEmitter<any> = new EventEmitter();
  checkoutItems:any = [];
  itemTotal :any = 0;
  totalDiscount:any = 0;
  totalPayable:any = 0;
  copyList:any;
  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = Infinity;
  _wrap: boolean = false;
  color: string = 'default';
  constructor( private ref:ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.checkoutCart && changes.checkoutCart.currentValue){
      console.log(changes.checkoutCart)
      this.checkoutItems = changes.checkoutCart.currentValue;
      this.copyList = this.checkoutItems
      //this.sortType = changes.sortParams.currentValue;     
      //this.sortList(this.sortType);
      this.ref.detectChanges();
    } 
  }

  ngOnInit() {
    this.calcPriceDetails();
  }

  @Input('value')
  set inputValue(_value: number) {
    this._value = this.parseNumber(_value);
  }

  @Input()
  set step(_step: number) {
    this._step = this.parseNumber(_step);
  }

  @Input()
  set min(_min: number) {
    this._min = this.parseNumber(_min);
  }

  @Input()
  set max(_max: number) {
    this._max = this.parseNumber(_max);
  }

  @Input()
  set wrap(_wrap: boolean) {
    this._wrap = this.parseBoolean(_wrap);
  }

  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  setColor(color: string): void {
    this.color = color;
   // this.calcPriceDetails();
    this.ref.detectChanges();
  }

  getColor(): string {
    return this.color
  }

  incrementValue(step: number = 1,pdt): void {
    let inputValue = pdt.count + step;
    if (this._wrap) {
      inputValue = this.wrappedValue(inputValue);
    }
    this._value = inputValue;
    pdt.count = inputValue;
    if(pdt.count<1){
      this.onRemovePdt(pdt);
    }
    pdt.discountAmount = (pdt.count * pdt.price) * (pdt.discount/100);
    this.calcPriceDetails()
    this.cartItems.emit(this.checkoutItems);
  }

  private wrappedValue(inputValue): number {
    if (inputValue > this._max) {
      return this._min + inputValue - this._max;
    }
    if (inputValue < this._min) {
      if (this._max === Infinity) {
        return 0;
      }
      return this._max + inputValue;
    }
    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this._wrap && inputValue <= this._min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this._wrap && inputValue >= this._max;
  }

  // onIncrementPdt(pdt){
  //   this.checkoutItems.push(pdt);
  // }

  onRemovePdt(product){
    //this.checkoutItems.splice(i,1);
    this.checkoutItems = this.checkoutItems.filter((pdt,i)=>{   
      if(product.id != pdt.id){
        return pdt
      }
    }); 
    this.calcPriceDetails();
    this.cartItems.emit(this.checkoutItems);
    this.ref.detectChanges();
  }

  calcPriceDetails(){
    let self = this;
    this.itemTotal = 0;
    this.totalDiscount = 0;
    this.totalPayable = 0;
    this.checkoutItems.reduce(function(total, obj) {
      self.itemTotal += (obj['price']*obj['count']);
      self.totalDiscount += obj.discountAmount;
      console.log(self.totalDiscount);
      console.log(self.itemTotal);
    }, 0);
    this.totalPayable = this.itemTotal - this.totalDiscount;
    this.ref.detectChanges();
  }

  trackById(index, pdt) {
    return pdt.id
}

}

