import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-admin-vendor-details',
  templateUrl: './admin-vendor-details.component.html',
  styleUrls: ['./admin-vendor-details.component.css']
})
export class AdminVendorDetailsComponent implements OnInit {
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
    this.router.navigate(["/adminVendorProducts",{id:id}]);
  }
  addProducts(id:number){
    this.router.navigate(["/addproductinvendor",{id:id}]);
  }
  deleteVendor(id:number){
    this.vendorService.deleteVendor(id).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/adminVendors"])
    })
    
    
  }
  updateVendor(id:number){
    console.log(id)
    this.router.navigate(["/updateVendor",{id:id}]);
  }

}
