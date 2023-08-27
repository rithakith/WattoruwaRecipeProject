import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsSearchComponent } from './desserts-search.component';

describe('DessertsSearchComponent', () => {
  let component: DessertsSearchComponent;
  let fixture: ComponentFixture<DessertsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsSearchComponent]
    });
    fixture = TestBed.createComponent(DessertsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
