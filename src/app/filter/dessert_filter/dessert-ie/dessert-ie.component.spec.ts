import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertIeComponent } from './dessert-ie.component';

describe('DessertIeComponent', () => {
  let component: DessertIeComponent;
  let fixture: ComponentFixture<DessertIeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertIeComponent]
    });
    fixture = TestBed.createComponent(DessertIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
