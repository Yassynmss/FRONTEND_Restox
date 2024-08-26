import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryTypeComponent } from './edit-delivery-type.component';

describe('EditDeliveryTypeComponent', () => {
  let component: EditDeliveryTypeComponent;
  let fixture: ComponentFixture<EditDeliveryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeliveryTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeliveryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
