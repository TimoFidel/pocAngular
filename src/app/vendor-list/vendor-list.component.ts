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
  searchKey=''
  declare tempVendors:Array<Vendor>;
  showVar: boolean = false;
  id:number =1;
  

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
  searchByKeyword(key:String){
    console.log(this.searchKey)
    this.tempVendors=[];
    this.vendorService.getAllVendor().subscribe(data=>{
      
      for(var vendor of data){
        if(this.searchKey.toLowerCase() == vendor.vendorName.toLowerCase()){
          //console.log(vendor.address)
          this.tempVendors.push(vendor)
        }
      }
      this.vendors=this.tempVendors
      console.log(this.tempVendors)
      
    })
    
  }
  toggleChild(vendorId:number){
    this.showVar = !this.showVar;
    this.id=vendorId
    console.log(vendorId)
  }
}
