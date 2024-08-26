import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryStatusComponent } from './edit-delivery-status.component';

describe('EditDeliveryStatusComponent', () => {
  let component: EditDeliveryStatusComponent;
  let fixture: ComponentFixture<EditDeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeliveryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
