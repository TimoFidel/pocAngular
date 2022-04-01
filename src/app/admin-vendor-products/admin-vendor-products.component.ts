import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-admin-vendor-products',
  templateUrl: './admin-vendor-products.component.html',
  styleUrls: ['./admin-vendor-products.component.css']
})
export class AdminVendorProductsComponent implements OnInit {
  declare id:number;
  declare products:Array<Product>;
  constructor(
    private vendorService:VendorService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params.id
    })
    this.vendorService.getProductOfVendor(this.id).subscribe(data=>{
      this.products=data
    })
  }
  viewProductById(id:number){
    this.router.navigate(["/adminProductDetail",{id:id}])
  }

}
