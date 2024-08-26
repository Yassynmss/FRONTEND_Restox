import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemDetailComponent } from './edit-item-detail.component';

describe('EditItemDetailComponent', () => {
  let component: EditItemDetailComponent;
  let fixture: ComponentFixture<EditItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
