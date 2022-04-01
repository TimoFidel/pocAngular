import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product()
  declare vendors:Array<Vendor>
  declare id:number
  @Input()
  showMePartially: boolean = false;
  constructor(
    private productService:ProductService,
    private vendorService:VendorService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.vendorService.getAllVendor().subscribe(data=>{
      this.vendors=data
      console.log(this.vendors)
    })
  }
  onSubmit(){
    //console.log(this.id)
    //console.log(this.product)
    this.productService.addNewProduct(this.product).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(["/adminProducts"])
  .then(() => {
    window.location.reload();
  });
  //console.log(this.product.vendor)
  }

}
