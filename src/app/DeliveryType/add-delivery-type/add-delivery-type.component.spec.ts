import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryTypeComponent } from './add-delivery-type.component';

describe('AddDeliveryTypeComponent', () => {
  let component: AddDeliveryTypeComponent;
  let fixture: ComponentFixture<AddDeliveryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeliveryTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
