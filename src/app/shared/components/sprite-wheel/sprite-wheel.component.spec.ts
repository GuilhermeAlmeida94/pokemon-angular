/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpriteWheelComponent } from './sprite-wheel.component';

describe('SpriteWheelComponent', () => {
  let component: SpriteWheelComponent;
  let fixture: ComponentFixture<SpriteWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
