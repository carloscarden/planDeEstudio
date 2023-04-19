import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCodigosComponent } from './seleccion-codigos.component';

describe('SeleccionCodigosComponent', () => {
  let component: SeleccionCodigosComponent;
  let fixture: ComponentFixture<SeleccionCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionCodigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
