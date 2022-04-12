import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl="http://pocbackend-env.eba-iqpicg48.ap-south-1.elasticbeanstalk.com//api/v1/vendor";

  constructor(
    private httpClient:HttpClient
  ) { }
  getAllVendor():Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(`${this.baseUrl}/allVendor`)
  }
  getVendorDetailById(id:number){
    return this.httpClient.get<Vendor>(`${this.baseUrl}/${id}`)
  }
  getProductOfVendor(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/${id}/products`)
  }
  deleteVendor(id:number){
    return this.httpClient.delete<Vendor>(`${this.baseUrl}/${id}`)
  }
  addVendor(vendor:Vendor){
    return this.httpClient.post(`${this.baseUrl}/addVendor`,vendor)
  }
  addProduct(id:number,product:Product){
    return this.httpClient.post(`${this.baseUrl}/addProduct/${id}`,product)
  }
  updateVendor(id:number,vendor:Vendor){
    return this.httpClient.post(`${this.baseUrl}/updateVendor/${id}`,vendor)
  }
}
