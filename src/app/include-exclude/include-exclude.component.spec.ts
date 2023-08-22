import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeExcludeComponent } from './include-exclude.component';

describe('IncludeExcludeComponent', () => {
  let component: IncludeExcludeComponent;
  let fixture: ComponentFixture<IncludeExcludeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncludeExcludeComponent]
    });
    fixture = TestBed.createComponent(IncludeExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
