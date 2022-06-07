import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp13Component } from './sp13.component';

describe('Sp13Component', () => {
  let component: Sp13Component;
  let fixture: ComponentFixture<Sp13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
