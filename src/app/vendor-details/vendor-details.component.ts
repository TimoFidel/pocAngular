import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  declare id:number;
  declare vendor:Vendor;
  
  constructor(
    private activatedRouter:ActivatedRoute,
    private vendorService:VendorService,
    private httpClient:HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{
      console.log(params.id);
      this.id=params.id;
      this.getVendorDetails(this.id);
    }
    
    )
  }
  getVendorDetails(id:number){
    this.vendorService.getVendorDetailById(this.id).subscribe(data=>{
      console.log(data);
      this.vendor=data;
    })
  }
  showProducts(id:number){
    this.router.navigate(["/product-list",{id:id}]);
  }

}
