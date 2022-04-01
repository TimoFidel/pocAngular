import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendorProductsComponent } from './admin-vendor-products.component';

describe('AdminVendorProductsComponent', () => {
  let component: AdminVendorProductsComponent;
  let fixture: ComponentFixture<AdminVendorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVendorProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVendorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
