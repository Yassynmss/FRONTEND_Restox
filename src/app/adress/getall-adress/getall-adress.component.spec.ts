import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallAdressComponent } from './getall-adress.component';

describe('GetallAdressComponent', () => {
  let component: GetallAdressComponent;
  let fixture: ComponentFixture<GetallAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallAdressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
