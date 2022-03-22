import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product()
  declare id:number
  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params.id;
    })
  }
  onSubmit(){
    //console.log(this.id)
    //console.log(this.product)
    this.productService.addProduct(this.id,this.product).subscribe(data=>{
      console.log(data)
    })
  }

}
