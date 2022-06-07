import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp9Component } from './sp9.component';

describe('Sp9Component', () => {
  let component: Sp9Component;
  let fixture: ComponentFixture<Sp9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
