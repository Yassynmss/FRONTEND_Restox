import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderDetailComponent } from './edit-order-detail.component';

describe('EditOrderDetailComponent', () => {
  let component: EditOrderDetailComponent;
  let fixture: ComponentFixture<EditOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOrderDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
