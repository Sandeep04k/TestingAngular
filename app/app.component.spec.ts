import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';
import { ProductService } from './product.service';

describe('AppComponent', () => {
  let calcService:CalculatorService;
  let prodService:ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('testAngular app is running!');
  });

  it('CalculatorServiceCallingAddMethod', () => {
    calcService = TestBed.inject(CalculatorService)
  
    const addResult = calcService.addOperation(4,4)
    expect(addResult).toBe(8);
  });
  it('CalculatorServiceCallingsubMethod', () => {
    calcService = TestBed.inject(CalculatorService)
  
    const subResult = calcService.subOperation(4,4)
    expect(subResult).toBe(0);
  });

  it('CalculatorServiceCallingmulMethod', () => {
    calcService = TestBed.inject(CalculatorService)
  
    const mulResult = calcService.mulOperation(4,4)
    expect(mulResult).toBe(16);
  });

  it('CalculatorServiceCallingdivMethod', () => {
    calcService = TestBed.inject(CalculatorService)
  
    const divResult = calcService.divOperation(4,4)
    expect(divResult).toBe(1);
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

  // it('GetpopProductCalling', () => {
  //   prodService = TestBed.inject(ProductService);
  //   prodService.popProduct();
  //   const prodResult1: any = prodService.getProducts();
  //   expect(prodResult1).toEqual(['mobile', 'TV', 'Camera']);
  // })

});
