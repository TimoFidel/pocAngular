import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {
  declare id:number;
  declare product:Product;
  constructor(
    private productService:ProductService,
    private activeRoute:ActivatedRoute,
    private router:Router
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
  deleteProductById(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/adminProducts"])
    })
    //console.log(id)
  }

}
