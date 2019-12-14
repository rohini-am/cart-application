import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sharedObj;
  constructor() { }

  set(value){
    this.sharedObj = value;
  }

  get(){
    let obj = this.sharedObj;
    return obj;
  }
}
