import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltemDetailComponent } from './getalltem-detail.component';

describe('GetalltemDetailComponent', () => {
  let component: GetalltemDetailComponent;
  let fixture: ComponentFixture<GetalltemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalltemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalltemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
