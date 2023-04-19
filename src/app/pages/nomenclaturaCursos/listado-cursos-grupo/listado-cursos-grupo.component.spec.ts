import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCursosGrupoComponent } from './listado-cursos-grupo.component';

describe('ListadoCursosGrupoComponent', () => {
  let component: ListadoCursosGrupoComponent;
  let fixture: ComponentFixture<ListadoCursosGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCursosGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCursosGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
