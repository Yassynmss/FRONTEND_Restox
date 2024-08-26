import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeliveryStatusComponent } from './delete-delivery-status.component';

describe('DeleteDeliveryStatusComponent', () => {
  let component: DeleteDeliveryStatusComponent;
  let fixture: ComponentFixture<DeleteDeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeliveryStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
