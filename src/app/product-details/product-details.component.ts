import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  declare id:number;
  declare product:Product;
  constructor(
    private productService:ProductService,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.id=params.id
      console.log(params.id)
      this.getProductDetail(this.id)
    })
  }
  getProductDetail(id:number){
    this.productService.getproductById(id).subscribe(data=>{
      this.product=data
    })
  }

}
