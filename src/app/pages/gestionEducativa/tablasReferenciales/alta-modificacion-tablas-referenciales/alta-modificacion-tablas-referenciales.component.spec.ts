import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaModificacionTablasReferencialesComponent } from './alta-modificacion-tablas-referenciales.component';

describe('AltaModificacionTablasReferencialesComponent', () => {
  let component: AltaModificacionTablasReferencialesComponent;
  let fixture: ComponentFixture<AltaModificacionTablasReferencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaModificacionTablasReferencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaModificacionTablasReferencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
