import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp8Component } from './sp8.component';

describe('Sp8Component', () => {
  let component: Sp8Component;
  let fixture: ComponentFixture<Sp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
