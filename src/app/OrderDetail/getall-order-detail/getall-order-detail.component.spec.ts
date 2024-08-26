import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallOrderDetailComponent } from './getall-order-detail.component';

describe('GetallOrderDetailComponent', () => {
  let component: GetallOrderDetailComponent;
  let fixture: ComponentFixture<GetallOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
