import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaAprobacionComponent } from './norma-aprobacion.component';

describe('NormaAprobacionComponent', () => {
  let component: NormaAprobacionComponent;
  let fixture: ComponentFixture<NormaAprobacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaAprobacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
