import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyDeEducacionComponent } from './ley-de-educacion.component';

describe('LeyDeEducacionComponent', () => {
  let component: LeyDeEducacionComponent;
  let fixture: ComponentFixture<LeyDeEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeyDeEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeyDeEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
