import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCombiComponent } from './edit-combi.component';

describe('EditCombiComponent', () => {
  let component: EditCombiComponent;
  let fixture: ComponentFixture<EditCombiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCombiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
