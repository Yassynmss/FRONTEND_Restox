import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerStatusComponent } from './delete-customer-status.component';

describe('DeleteCustomerStatusComponent', () => {
  let component: DeleteCustomerStatusComponent;
  let fixture: ComponentFixture<DeleteCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
