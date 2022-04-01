import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product= new Product;
  declare id:number
  declare placeholder:String;
  declare vendors:Array<Vendor>
  
  constructor(
    private activatedRouter:ActivatedRoute,
    private productService:ProductService,
    private vendorService:VendorService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      console.log(params.id);
      this.id=params.id;
      this.getProduct(this.id);
    })
    this.vendorService.getAllVendor().subscribe(data=>{
      this.vendors=data
      console.log(this.vendors)
    })
    
    
  }
  getProduct(id:number){
    this.productService.getproductById(id).subscribe(data=>{
      this.product=data
      this.placeholder=this.product.vendor.vendorName
    })
  }
  onSubmit(){
    this.productService.updateProduct(this.id,this.product).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(["/adminProductDetail",{id:this.id}])
    .then(() => {
      window.location.reload();
    });
  
  }

}
