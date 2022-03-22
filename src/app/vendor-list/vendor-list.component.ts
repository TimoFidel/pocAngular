import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  declare vendors:Array<Vendor>

  constructor(
    private vendorService:VendorService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getAllVendors()
  }
  viewVendorById(id:number){
    this.router.navigate(["/vendor-details",{id:id}])
  }
  getAllVendors(){
    this.vendorService.getAllVendor().subscribe(data=>{
      this.vendors=data;
      console.log(this.vendors);
    })
  }

}
