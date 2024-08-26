import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallCurrencyComponent } from './getall-currency.component';

describe('GetallCurrencyComponent', () => {
  let component: GetallCurrencyComponent;
  let fixture: ComponentFixture<GetallCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
