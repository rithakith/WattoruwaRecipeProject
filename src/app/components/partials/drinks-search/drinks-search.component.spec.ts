import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksSearchComponent } from './drinks-search.component';

describe('DrinksSearchComponent', () => {
  let component: DrinksSearchComponent;
  let fixture: ComponentFixture<DrinksSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksSearchComponent]
    });
    fixture = TestBed.createComponent(DrinksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
