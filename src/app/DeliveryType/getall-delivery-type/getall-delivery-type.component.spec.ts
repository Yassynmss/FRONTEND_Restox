import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallDeliveryTypeComponent } from './getall-delivery-type.component';

describe('GetallDeliveryTypeComponent', () => {
  let component: GetallDeliveryTypeComponent;
  let fixture: ComponentFixture<GetallDeliveryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallDeliveryTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallDeliveryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
