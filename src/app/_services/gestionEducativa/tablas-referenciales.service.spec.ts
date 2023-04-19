import { TestBed } from '@angular/core/testing';

import { TablasReferencialesService } from './tablas-referenciales.service';

describe('TablasReferencialesService', () => {
  let service: TablasReferencialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablasReferencialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
