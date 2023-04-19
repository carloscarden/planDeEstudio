import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesAbmPlanDeEstudioComponent } from './evaluaciones-abm-plan-de-estudio.component';

describe('EvaluacionesAbmPlanDeEstudioComponent', () => {
  let component: EvaluacionesAbmPlanDeEstudioComponent;
  let fixture: ComponentFixture<EvaluacionesAbmPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionesAbmPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionesAbmPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
