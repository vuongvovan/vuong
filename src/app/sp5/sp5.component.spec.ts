import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp5Component } from './sp5.component';

describe('Sp5Component', () => {
  let component: Sp5Component;
  let fixture: ComponentFixture<Sp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
