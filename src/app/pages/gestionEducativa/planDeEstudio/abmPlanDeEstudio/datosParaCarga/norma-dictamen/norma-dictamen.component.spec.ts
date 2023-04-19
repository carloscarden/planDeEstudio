import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaDictamenComponent } from './norma-dictamen.component';

describe('NormaDictamenComponent', () => {
  let component: NormaDictamenComponent;
  let fixture: ComponentFixture<NormaDictamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaDictamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaDictamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
