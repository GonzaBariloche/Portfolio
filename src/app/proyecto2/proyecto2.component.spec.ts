import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2Component } from './proyecto2.component';

describe('Proyecto2Component', () => {
  let component: Proyecto2Component;
  let fixture: ComponentFixture<Proyecto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
