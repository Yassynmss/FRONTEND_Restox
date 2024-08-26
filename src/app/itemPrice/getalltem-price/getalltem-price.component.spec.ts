import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltemPriceComponent } from './getalltem-price.component';

describe('GetalltemPriceComponent', () => {
  let component: GetalltemPriceComponent;
  let fixture: ComponentFixture<GetalltemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalltemPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalltemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
