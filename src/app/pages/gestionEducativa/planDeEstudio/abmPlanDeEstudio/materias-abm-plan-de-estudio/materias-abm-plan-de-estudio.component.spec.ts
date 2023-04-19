import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasAbmPlanDeEstudioComponent } from './materias-abm-plan-de-estudio.component';

describe('MateriasAbmPlanDeEstudioComponent', () => {
  let component: MateriasAbmPlanDeEstudioComponent;
  let fixture: ComponentFixture<MateriasAbmPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasAbmPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasAbmPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
