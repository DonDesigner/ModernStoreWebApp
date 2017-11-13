

import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  providers: [DataService]
})
export class CartPageComponent implements OnInit {

  public discount: number = 0;
  public items: any[] = [];
  public deliveryFee: number = 5;

  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    this.items = this.cartService.items;
  }

  remove(item){
    this.cartService.removeItem(item.id);
  }

  checkQuantity(item){
    if(item.quantity < 1){
      item.quantity = 1;
    }
  }

  getSubTotal(): number{
    return this.cartService.getSubTotal();
  }

  checkout(){
    var user = JSON.parse(localStorage.getItem('mws.user'));
    var data = {
      customer: user.id,
      deliveryFee: this.deliveryFee,
      discount: this.discount,
      items:[]
    };

    for(let i of this.items){
      data.items.push({
        product: i.id, 
        quantity: i.quantity
      })
    }
    
    this.dataService.createOrder(data).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
    //console.log();
    //console.table(this.cartService.items);
  }



  

}
