/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaadselListComponent } from './raadsel-list.component';

describe('RaadselListComponent', () => {
  let component: RaadselListComponent;
  let fixture: ComponentFixture<RaadselListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaadselListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaadselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
