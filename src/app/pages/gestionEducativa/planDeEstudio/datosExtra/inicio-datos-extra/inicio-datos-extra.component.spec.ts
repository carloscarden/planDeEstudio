import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDatosExtraComponent } from './inicio-datos-extra.component';

describe('InicioDatosExtraComponent', () => {
  let component: InicioDatosExtraComponent;
  let fixture: ComponentFixture<InicioDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
