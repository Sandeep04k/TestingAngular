import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let prodService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('GetProductCalling', () => {
    prodService = TestBed.inject(ProductService);
    const prodResult = prodService.getProduct();
    expect(prodResult).toEqual(['mobile', 'TV', 'Camera', 'Laptop']);
  })   

  it('GetAddProductCalling', () => {
    prodService = TestBed.inject(ProductService);
    prodService.addProduct('speaker');
    const prodResult1: any = prodService.getProducts();
    expect(prodResult1).toEqual(['mobile', 'TV', 'Camera', 'Laptop', 'speaker']);
  })

});
