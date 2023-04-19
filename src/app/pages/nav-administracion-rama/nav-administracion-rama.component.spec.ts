import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdministracionRamaComponent } from './nav-administracion-rama.component';

describe('NavAdministracionRamaComponent', () => {
  let component: NavAdministracionRamaComponent;
  let fixture: ComponentFixture<NavAdministracionRamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAdministracionRamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAdministracionRamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
