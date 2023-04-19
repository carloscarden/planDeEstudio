import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadesPorSeccionAbmPlanDeEstudioComponent } from './edades-por-seccion-abm-plan-de-estudio.component';

describe('EdadesPorSeccionAbmPlanDeEstudioComponent', () => {
  let component: EdadesPorSeccionAbmPlanDeEstudioComponent;
  let fixture: ComponentFixture<EdadesPorSeccionAbmPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdadesPorSeccionAbmPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdadesPorSeccionAbmPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
