import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp10Component } from './sp10.component';

describe('Sp10Component', () => {
  let component: Sp10Component;
  let fixture: ComponentFixture<Sp10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
