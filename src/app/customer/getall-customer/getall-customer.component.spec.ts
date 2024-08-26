import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCustomerComponent } from './getall-customer.component';

describe('GetallCustomerComponent', () => {
  let component: GetallCustomerComponent;
  let fixture: ComponentFixture<GetallCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
