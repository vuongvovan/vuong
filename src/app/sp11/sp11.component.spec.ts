import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp11Component } from './sp11.component';

describe('Sp11Component', () => {
  let component: Sp11Component;
  let fixture: ComponentFixture<Sp11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
