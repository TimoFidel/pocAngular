import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-product-to-vendor',
  templateUrl: './add-product-to-vendor.component.html',
  styleUrls: ['./add-product-to-vendor.component.css']
})
export class AddProductToVendorComponent implements OnInit {
  product:Product=new Product();
  declare id:number;
  constructor(
    private activatedRouter:ActivatedRoute,
    private vendorService:VendorService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      this.id=params.id
      console.log(this.id)
    })
  }
  onSubmit(){
    this.vendorService.addProduct(this.id,this.product).subscribe(data=>{
      console.log(data)
    })  
    //console.log(this.product)
  
  }

}
