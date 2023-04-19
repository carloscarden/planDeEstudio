import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmDatosExtraComponent } from './abm-datos-extra.component';

describe('AbmDatosExtraComponent', () => {
  let component: AbmDatosExtraComponent;
  let fixture: ComponentFixture<AbmDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
