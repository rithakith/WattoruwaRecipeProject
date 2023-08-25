import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsPageComponent } from './desserts-page.component';

describe('DessertsPageComponent', () => {
  let component: DessertsPageComponent;
  let fixture: ComponentFixture<DessertsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsPageComponent]
    });
    fixture = TestBed.createComponent(DessertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
