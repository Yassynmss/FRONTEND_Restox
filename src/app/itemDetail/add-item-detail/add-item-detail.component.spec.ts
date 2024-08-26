import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDetailComponent } from './add-item-detail.component';

describe('AddItemDetailComponent', () => {
  let component: AddItemDetailComponent;
  let fixture: ComponentFixture<AddItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
