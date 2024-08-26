import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerStatusComponent } from './add-customer-status.component';

describe('AddCustomerStatusComponent', () => {
  let component: AddCustomerStatusComponent;
  let fixture: ComponentFixture<AddCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
