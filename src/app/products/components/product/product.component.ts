import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data!:Product
  @Output() item:any = new EventEmitter();
  addButton:boolean = false;
  amount:number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  addToCartPro() {
    this.item.emit({item:this.data,quantity:this.amount});
  }

}
