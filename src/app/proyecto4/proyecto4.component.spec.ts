import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto4Component } from './proyecto4.component';

describe('Proyecto4Component', () => {
  let component: Proyecto4Component;
  let fixture: ComponentFixture<Proyecto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
