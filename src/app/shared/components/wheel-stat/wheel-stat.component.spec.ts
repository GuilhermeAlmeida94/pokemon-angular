/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WheelStatComponent } from './wheel-stat.component';

describe('WheelStatComponent', () => {
  let component: WheelStatComponent;
  let fixture: ComponentFixture<WheelStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
