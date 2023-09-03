import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIeComponent } from './drink-ie.component';

describe('DrinkIeComponent', () => {
  let component: DrinkIeComponent;
  let fixture: ComponentFixture<DrinkIeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkIeComponent]
    });
    fixture = TestBed.createComponent(DrinkIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
