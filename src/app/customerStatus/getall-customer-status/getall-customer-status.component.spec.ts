import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCustomerStatusComponent } from './getall-customer-status.component';

describe('GetallCustomerStatusComponent', () => {
  let component: GetallCustomerStatusComponent;
  let fixture: ComponentFixture<GetallCustomerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallCustomerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallCustomerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
