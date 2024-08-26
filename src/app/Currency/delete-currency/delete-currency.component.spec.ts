import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCurrencyComponent } from './delete-currency.component';

describe('DeleteCurrencyComponent', () => {
  let component: DeleteCurrencyComponent;
  let fixture: ComponentFixture<DeleteCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
