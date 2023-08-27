import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsTagsComponent } from './desserts-tags.component';

describe('DessertsTagsComponent', () => {
  let component: DessertsTagsComponent;
  let fixture: ComponentFixture<DessertsTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsTagsComponent]
    });
    fixture = TestBed.createComponent(DessertsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
