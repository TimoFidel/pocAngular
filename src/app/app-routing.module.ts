import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductToVendorComponent } from './add-product-to-vendor/add-product-to-vendor.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminVendorDetailsComponent } from './admin-vendor-details/admin-vendor-details.component';
import { AdminVendorProductsComponent } from './admin-vendor-products/admin-vendor-products.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AllProductComponent } from './all-product/all-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  {path:"",component:VendorListComponent},
  {path:"vendors",component:VendorListComponent},
  {path:"products",component:AllProductComponent},
  {path:"vendor-details",component:VendorDetailsComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"adminVendors",component:AdminVendorsComponent},
  {path:"adminProducts",component:AdminProductsComponent},
  {path:"adminVendorDetail",component:AdminVendorDetailsComponent},
  {path:"adminProductDetail",component:AdminProductDetailsComponent},
  {path:"addVendor",component:AddVendorComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"updateVendor",component:UpdateVendorComponent},
  {path:"updateProduct",component:UpdateProductComponent},
  {path:"adminVendorProducts",component:AdminVendorProductsComponent},
  {path:"addproductinvendor",component:AddProductToVendorComponent},
  {path:"",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
