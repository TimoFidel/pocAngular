import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.css']
})
export class AdminVendorsComponent implements OnInit {
  declare vendors:Array<Vendor>
  constructor(
    private vendorService:VendorService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getAllVendors()
  }
  viewVendorById(id:number){
    this.router.navigate(["/adminVendorDetail",{id:id}])
  }
  getAllVendors(){
    this.vendorService.getAllVendor().subscribe(data=>{
      this.vendors=data;
      console.log(this.vendors);
    })
  }

}
