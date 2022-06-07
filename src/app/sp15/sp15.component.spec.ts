import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp15Component } from './sp15.component';

describe('Sp15Component', () => {
  let component: Sp15Component;
  let fixture: ComponentFixture<Sp15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
