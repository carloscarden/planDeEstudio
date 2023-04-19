import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCicloEstudioComponent } from './alta-ciclo-estudio.component';

describe('AltaCicloEstudioComponent', () => {
  let component: AltaCicloEstudioComponent;
  let fixture: ComponentFixture<AltaCicloEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCicloEstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCicloEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
