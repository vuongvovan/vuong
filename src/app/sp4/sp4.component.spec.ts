import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp4Component } from './sp4.component';

describe('Sp4Component', () => {
  let component: Sp4Component;
  let fixture: ComponentFixture<Sp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
