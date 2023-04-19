import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmAnioDatosExtraComponent } from './abm-anio-datos-extra.component';

describe('AbmAnioDatosExtraComponent', () => {
  let component: AbmAnioDatosExtraComponent;
  let fixture: ComponentFixture<AbmAnioDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmAnioDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmAnioDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
