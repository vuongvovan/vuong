import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp12Component } from './sp12.component';

describe('Sp12Component', () => {
  let component: Sp12Component;
  let fixture: ComponentFixture<Sp12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
