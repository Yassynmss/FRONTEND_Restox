import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCustomerReviewComponent } from './getall-customer-review.component';

describe('GetallCustomerReviewComponent', () => {
  let component: GetallCustomerReviewComponent;
  let fixture: ComponentFixture<GetallCustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallCustomerReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
