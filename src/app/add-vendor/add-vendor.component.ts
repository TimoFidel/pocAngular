import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendor:Vendor=new Vendor();
  constructor(
    private vendorService:VendorService
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.vendorService.addVendor(this.vendor).subscribe(data=>{
      console.log(data)
    })
    console.log(this.vendor)
  }

}
