import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CustomerNavigationComponent } from './customer-navigation/customer-navigation.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AllProductComponent } from './all-product/all-product.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminVendorDetailsComponent } from './admin-vendor-details/admin-vendor-details.component';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminVendorProductsComponent } from './admin-vendor-products/admin-vendor-products.component';
import { AddProductToVendorComponent } from './add-product-to-vendor/add-product-to-vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerNavigationComponent,
    CustomerDashboardComponent,
    VendorDetailsComponent,
    ProductDetailsComponent,
    VendorListComponent,
    ProductListComponent,
    AllProductComponent,
    AdminNavigationComponent,
    AdminVendorsComponent,
    AdminProductsComponent,
    AdminVendorDetailsComponent,
    AdminProductDetailsComponent,
    AddVendorComponent,
    AddProductComponent,
    UpdateVendorComponent,
    UpdateProductComponent,
    AdminVendorProductsComponent,
    AddProductToVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
