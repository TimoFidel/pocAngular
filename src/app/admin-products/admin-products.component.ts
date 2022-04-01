import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  declare id:number;
  declare products:Array<Product>;
  showVar: boolean = false;
  constructor(
    private vendorService:VendorService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.productService.getAllProduct().subscribe(data=>{
      this.products=data
      console.log(data)
    })
  }
  viewProductById(id:number){
    this.router.navigate(["/adminProductDetail",{id:id}])
  }
  toggleChild(){
    this.showVar = !this.showVar;
}

}
