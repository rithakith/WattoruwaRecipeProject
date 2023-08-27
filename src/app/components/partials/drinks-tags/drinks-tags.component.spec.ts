import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksTagsComponent } from './drinks-tags.component';

describe('DrinksTagsComponent', () => {
  let component: DrinksTagsComponent;
  let fixture: ComponentFixture<DrinksTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksTagsComponent]
    });
    fixture = TestBed.createComponent(DrinksTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
