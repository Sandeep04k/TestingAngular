import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = ['mobile', 'TV', 'Camera', 'Laptop']
  getProducts(){
    return this.products;
  }

  getProduct()
  {
    return this.products;
  }
    addProduct(product:string)
    {
      this.products.push(product)
      return this.products;
    }

    popProduct()
    {
      this.products.pop()
      return this.products;
    }

    addProducts(product:string)
    {
      return this.products.push(product)
    
    }

  }

