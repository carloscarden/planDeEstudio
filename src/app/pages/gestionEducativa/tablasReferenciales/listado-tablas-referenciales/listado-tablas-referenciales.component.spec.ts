import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTablasReferencialesComponent } from './listado-tablas-referenciales.component';

describe('ListadoTablasReferencialesComponent', () => {
  let component: ListadoTablasReferencialesComponent;
  let fixture: ComponentFixture<ListadoTablasReferencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTablasReferencialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTablasReferencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
