import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemPriceComponent } from './edit-item-price.component';

describe('EditItemPriceComponent', () => {
  let component: EditItemPriceComponent;
  let fixture: ComponentFixture<EditItemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditItemPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
