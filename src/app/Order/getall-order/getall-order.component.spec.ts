import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallOrderComponent } from './getall-order.component';

describe('GetallOrderComponent', () => {
  let component: GetallOrderComponent;
  let fixture: ComponentFixture<GetallOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
