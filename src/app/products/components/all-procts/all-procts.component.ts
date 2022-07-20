import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-procts',
  templateUrl: './all-procts.component.html',
  styleUrls: ['./all-procts.component.css']
})
export class AllProctsComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) =>{
      this.products= res;
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err);
      }
    )
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any) =>{
      this.categories= res;
      this.loading = false;
    },
      err => {
        this.loading = false;
        alert(err);
      }
    )
  }

  filterCategory(event:any) {
    let value = event.target.value;
    this.getProductsCategory(value);
  }

  getProductsCategory(keyword:string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res:any) =>{
      this.products= res;
      this.loading = false;
      console.log(res);
    },
      err => {
        this.loading = false;
        alert(err);
      }
    )
  }

  addToCart(event:any) {
    // JSON.stringify() Send Data 
    // JSON.parse() Recive Data
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id === event.item.id)
      if (exist){
        alert("Product Is Already In the Cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
    
  }

}
