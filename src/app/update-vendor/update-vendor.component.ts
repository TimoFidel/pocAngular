import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
  declare id:number;
  vendor:Vendor=new Vendor();
  constructor(
    private activatedRouter:ActivatedRoute,
    private vendorService:VendorService,
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
  onSubmit(){
    this.vendorService.updateVendor(this.id,this.vendor).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(["/adminVendorDetail",{id:this.id}])
  .then(() => {
    window.location.reload();
  });
  }

}
