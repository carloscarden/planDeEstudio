import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmMateriasDatosExtraComponent } from './abm-materias-datos-extra.component';

describe('AbmMateriasDatosExtraComponent', () => {
  let component: AbmMateriasDatosExtraComponent;
  let fixture: ComponentFixture<AbmMateriasDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmMateriasDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmMateriasDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
