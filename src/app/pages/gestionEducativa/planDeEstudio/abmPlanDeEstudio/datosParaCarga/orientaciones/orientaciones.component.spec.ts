import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionesComponent } from './orientaciones.component';

describe('OrientacionesComponent', () => {
  let component: OrientacionesComponent;
  let fixture: ComponentFixture<OrientacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
