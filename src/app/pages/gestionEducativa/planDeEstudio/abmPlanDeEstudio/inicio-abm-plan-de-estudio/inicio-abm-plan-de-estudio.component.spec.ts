import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAbmPlanDeEstudioComponent } from './inicio-abm-plan-de-estudio.component';

describe('InicioAbmPlanDeEstudioComponent', () => {
  let component: InicioAbmPlanDeEstudioComponent;
  let fixture: ComponentFixture<InicioAbmPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAbmPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAbmPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
