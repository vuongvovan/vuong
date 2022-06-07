import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp7Component } from './sp7.component';

describe('Sp7Component', () => {
  let component: Sp7Component;
  let fixture: ComponentFixture<Sp7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
