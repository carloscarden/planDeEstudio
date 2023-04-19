import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRamaComponent } from './inicio-rama.component';

describe('InicioRamaComponent', () => {
  let component: InicioRamaComponent;
  let fixture: ComponentFixture<InicioRamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioRamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
