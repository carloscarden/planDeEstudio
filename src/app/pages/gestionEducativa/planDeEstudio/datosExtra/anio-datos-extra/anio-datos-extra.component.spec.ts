import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioDatosExtraComponent } from './anio-datos-extra.component';

describe('AnioDatosExtraComponent', () => {
  let component: AnioDatosExtraComponent;
  let fixture: ComponentFixture<AnioDatosExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnioDatosExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioDatosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
