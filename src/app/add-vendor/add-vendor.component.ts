import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendor:Vendor=new Vendor();
  @Input()
  showMePartially: boolean = false;
  constructor(
    private vendorService:VendorService,
    private router:Router,
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.vendorService.addVendor(this.vendor).subscribe(data=>{
      console.log(data)
      this.showMePartially=!this.showMePartially
      
    })
    console.log(this.vendor)
    this.router.navigate(["/adminVendors"])
  .then(() => {
    window.location.reload();
  });
  }

}
