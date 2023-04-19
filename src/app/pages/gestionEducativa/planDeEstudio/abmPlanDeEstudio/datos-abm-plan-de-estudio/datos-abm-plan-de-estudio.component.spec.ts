import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAbmPlanDeEstudioComponent } from './datos-abm-plan-de-estudio.component';

describe('DatosAbmPlanDeEstudioComponent', () => {
  let component: DatosAbmPlanDeEstudioComponent;
  let fixture: ComponentFixture<DatosAbmPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAbmPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAbmPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
