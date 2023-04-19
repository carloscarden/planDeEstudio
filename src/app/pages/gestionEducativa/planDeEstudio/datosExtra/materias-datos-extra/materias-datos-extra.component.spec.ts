import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDatosExtraComponent } from './materias-datos-extra.component';

describe('MateriasDatosExtraComponent', () => {
  let component: MateriasDatosExtraComponent;
  let fixture: ComponentFixture<MateriasDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
