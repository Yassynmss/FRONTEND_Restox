import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCombiComponent } from './add-combi.component';

describe('AddCombiComponent', () => {
  let component: AddCombiComponent;
  let fixture: ComponentFixture<AddCombiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCombiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
