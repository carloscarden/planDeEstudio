import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmCodigosComponent } from './abm-codigos.component';

describe('AbmCodigosComponent', () => {
  let component: AbmCodigosComponent;
  let fixture: ComponentFixture<AbmCodigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmCodigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
