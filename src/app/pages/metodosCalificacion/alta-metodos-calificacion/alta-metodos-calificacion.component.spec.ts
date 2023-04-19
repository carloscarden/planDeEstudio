import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMetodosCalificacionComponent } from './alta-metodos-calificacion.component';

describe('AltaMetodosCalificacionComponent', () => {
  let component: AltaMetodosCalificacionComponent;
  let fixture: ComponentFixture<AltaMetodosCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaMetodosCalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMetodosCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
