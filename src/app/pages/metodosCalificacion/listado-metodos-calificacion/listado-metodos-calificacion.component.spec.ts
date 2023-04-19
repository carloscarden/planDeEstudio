import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMetodosCalificacionComponent } from './listado-metodos-calificacion.component';

describe('ListadoMetodosCalificacionComponent', () => {
  let component: ListadoMetodosCalificacionComponent;
  let fixture: ComponentFixture<ListadoMetodosCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMetodosCalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMetodosCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
