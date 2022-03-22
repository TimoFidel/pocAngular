import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  declare products:Array<Product>
  constructor(
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      this.products=data;
    })
  }
  viewProductById(id:number){
    this.router.navigate(["/product-details",{id:id}])
  }

}
