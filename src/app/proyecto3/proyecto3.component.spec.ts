import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto3Component } from './proyecto3.component';

describe('Proyecto3Component', () => {
  let component: Proyecto3Component;
  let fixture: ComponentFixture<Proyecto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
