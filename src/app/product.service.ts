import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl="http://localhost:8080/api/v1/product";
  constructor(
    private httpClient:HttpClient,
  ) { }

  getproductById(id:number){
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`)
  }
  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/allProduct`)
  }
  addProduct(id:number,product:Product){
    return this.httpClient.post(`${this.baseUrl}/addProduct/${id}`,product)
  }
  deleteProduct(id:number){
    return this.httpClient.delete<Product>(`${this.baseUrl}/${id}`)
  }
}
