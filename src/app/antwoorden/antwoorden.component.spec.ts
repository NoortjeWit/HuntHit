/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AntwoordenComponent } from './antwoorden.component';

describe('AntwoordenComponent', () => {
  let component: AntwoordenComponent;
  let fixture: ComponentFixture<AntwoordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntwoordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntwoordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
