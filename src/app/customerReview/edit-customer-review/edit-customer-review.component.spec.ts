import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerReviewComponent } from './edit-customer-review.component';

describe('EditCustomerReviewComponent', () => {
  let component: EditCustomerReviewComponent;
  let fixture: ComponentFixture<EditCustomerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCustomerReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
