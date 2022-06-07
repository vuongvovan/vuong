import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp6Component } from './sp6.component';

describe('Sp6Component', () => {
  let component: Sp6Component;
  let fixture: ComponentFixture<Sp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
