import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldeleteComponent } from './getalldelete.component';

describe('GetalldeleteComponent', () => {
  let component: GetalldeleteComponent;
  let fixture: ComponentFixture<GetalldeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalldeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalldeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
