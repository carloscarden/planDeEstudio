import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPlanDeEstudioComponent } from './listado-plan-de-estudio.component';

describe('ListadoPlanDeEstudioComponent', () => {
  let component: ListadoPlanDeEstudioComponent;
  let fixture: ComponentFixture<ListadoPlanDeEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPlanDeEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPlanDeEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
