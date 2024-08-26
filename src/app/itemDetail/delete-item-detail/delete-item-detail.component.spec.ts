import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemDetailComponent } from './delete-item-detail.component';

describe('DeleteItemDetailComponent', () => {
  let component: DeleteItemDetailComponent;
  let fixture: ComponentFixture<DeleteItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
