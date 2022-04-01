import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import {Location} from '@angular/common';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  declare id:number;
  declare products:Array<Product>;
  declare searchKey:String;
  declare tempProduct:Array<Product>
  constructor(
    private vendorService:VendorService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private _location: Location
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
    this.router.navigate(["/product-details",{id:id}])
  }
  searchByKeyword(){
    console.log(this.searchKey)
    this.tempProduct=[]
    this.vendorService.getProductOfVendor(this.id).subscribe(data=>{
      for(var product of data){
        if(this.searchKey.toLowerCase() == product.modelName.toLowerCase()){
          this.tempProduct.push(product)
        }
      }
      this.products=this.tempProduct
    })
  }

}
