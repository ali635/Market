import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id:any
  data:any= {}
  loading: boolean = false;
  constructor(private router:ActivatedRoute,private service:ProductsService) { 
    this.id = this.router.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading = true
    this.service.getProductById(this.id).subscribe(res => {
      this.loading = false;
      this.data = res;
    },error => {
      this.loading = false;
      alert(error);
    })
  }
}
