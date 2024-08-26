import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemPriceComponent } from './delete-item-price.component';

describe('DeleteItemPriceComponent', () => {
  let component: DeleteItemPriceComponent;
  let fixture: ComponentFixture<DeleteItemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteItemPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
