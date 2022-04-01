import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToVendorComponent } from './add-product-to-vendor.component';

describe('AddProductToVendorComponent', () => {
  let component: AddProductToVendorComponent;
  let fixture: ComponentFixture<AddProductToVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
