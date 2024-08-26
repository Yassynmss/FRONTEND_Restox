import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerStatusComponent } from './edit-customer-status.component';

describe('EditCustomerStatusComponent', () => {
  let component: EditCustomerStatusComponent;
  let fixture: ComponentFixture<EditCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCustomerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
