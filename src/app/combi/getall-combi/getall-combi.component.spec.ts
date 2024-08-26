import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCombiComponent } from './getall-combi.component';

describe('GetallCombiComponent', () => {
  let component: GetallCombiComponent;
  let fixture: ComponentFixture<GetallCombiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallCombiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallCombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
