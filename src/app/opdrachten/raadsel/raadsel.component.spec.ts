/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaadselComponent } from './raadsel.component';

describe('RaadselComponent', () => {
  let component: RaadselComponent;
  let fixture: ComponentFixture<RaadselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaadselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaadselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
