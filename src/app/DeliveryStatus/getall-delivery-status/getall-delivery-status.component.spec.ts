import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallDeliveryStatusComponent } from './getall-delivery-status.component';

describe('GetallDeliveryStatusComponent', () => {
  let component: GetallDeliveryStatusComponent;
  let fixture: ComponentFixture<GetallDeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallDeliveryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
