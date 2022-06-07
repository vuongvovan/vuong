import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp14Component } from './sp14.component';

describe('Sp14Component', () => {
  let component: Sp14Component;
  let fixture: ComponentFixture<Sp14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
