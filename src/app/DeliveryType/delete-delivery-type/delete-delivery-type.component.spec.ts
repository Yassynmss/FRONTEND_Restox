import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeliveryTypeComponent } from './delete-delivery-type.component';

describe('DeleteDeliveryTypeComponent', () => {
  let component: DeleteDeliveryTypeComponent;
  let fixture: ComponentFixture<DeleteDeliveryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeliveryTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDeliveryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
