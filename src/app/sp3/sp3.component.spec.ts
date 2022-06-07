import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp3Component } from './sp3.component';

describe('Sp3Component', () => {
  let component: Sp3Component;
  let fixture: ComponentFixture<Sp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
