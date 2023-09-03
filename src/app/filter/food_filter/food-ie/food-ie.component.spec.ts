import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIeComponent } from './food-ie.component';

describe('FoodIeComponent', () => {
  let component: FoodIeComponent;
  let fixture: ComponentFixture<FoodIeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodIeComponent]
    });
    fixture = TestBed.createComponent(FoodIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
