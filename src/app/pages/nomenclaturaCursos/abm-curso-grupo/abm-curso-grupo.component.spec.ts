import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmCursoGrupoComponent } from './abm-curso-grupo.component';

describe('AbmCursoGrupoComponent', () => {
  let component: AbmCursoGrupoComponent;
  let fixture: ComponentFixture<AbmCursoGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmCursoGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmCursoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
