import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get product', () => {
    const addResult: any[] = service.getProduct();
    expect(addResult).toEqual(['mobile', 'TV', 'Camera', 'Laptop']);
  });

  // it('add product', () => {
  //  service.addProduct('speaker');
  //   const prodResult1: any = service.getProducts();
  //   expect(prodResult1).toEqual(['mobile', 'TV', 'Camera', 'Laptop', 'speaker']); 
  //   });

    it('length of product', () => {
      var addProd:any = service.addProducts('speaker');
      expect(addProd).toBe(5); 
       });

       it('add product', () => {
        var addProd:any = service.addProduct('speaker');
        expect(addProd).toEqual(['mobile', 'TV', 'Camera', 'Laptop', 'speaker']); 
         });

         it('pop product', () => {
          var popProd:any = service.popProduct();
          expect(popProd).toEqual(['mobile', 'TV', 'Camera']); 
           });
});
