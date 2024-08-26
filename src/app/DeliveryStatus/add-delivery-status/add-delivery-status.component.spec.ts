import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryStatusComponent } from './add-delivery-status.component';

describe('AddDeliveryStatusComponent', () => {
  let component: AddDeliveryStatusComponent;
  let fixture: ComponentFixture<AddDeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeliveryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
