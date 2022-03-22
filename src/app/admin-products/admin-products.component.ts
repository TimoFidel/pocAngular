import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  declare id:number;
  declare products:Array<Product>;
  constructor(
    private vendorService:VendorService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params.id;
      console.log(params.id)
      this.getAllProducts(this.id)
    })
  }
  getAllProducts(id:number){
    this.vendorService.getProductOfVendor(id).subscribe(data=>{
      this.products=data
      console.log(data)
    })
  }
  viewProductById(id:number){
    this.router.navigate(["/adminProductDetail",{id:id}])
  }

}
