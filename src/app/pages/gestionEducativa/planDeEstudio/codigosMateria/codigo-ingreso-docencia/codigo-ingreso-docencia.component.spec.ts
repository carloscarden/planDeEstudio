import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoIngresoDocenciaComponent } from './codigo-ingreso-docencia.component';

describe('CodigoIngresoDocenciaComponent', () => {
  let component: CodigoIngresoDocenciaComponent;
  let fixture: ComponentFixture<CodigoIngresoDocenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoIngresoDocenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoIngresoDocenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
