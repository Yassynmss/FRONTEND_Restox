import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerReviewComponent } from './delete-customer-review.component';

describe('DeleteCustomerReviewComponent', () => {
  let component: DeleteCustomerReviewComponent;
  let fixture: ComponentFixture<DeleteCustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
