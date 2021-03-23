import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add operation', () => {
    const addResult = service.addOperation(4,4);
    expect(addResult).toBe(8); 
    });

    it('sub operation', () => {
    const subResult = service.subOperation(4,4);
    expect(subResult).toBe(0); 
    });

    it('mul operation', () => {
      const subResult = service.mulOperation(4,4);
      expect(subResult).toBe(16); 
      });

      it('div operation', () => {
        const subResult = service.divOperation(4,4);
        expect(subResult).toBe(1); 
        });
});
