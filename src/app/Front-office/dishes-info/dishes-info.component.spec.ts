import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesInfoComponent } from './dishes-info.component';

describe('DishesInfoComponent', () => {
  let component: DishesInfoComponent;
  let fixture: ComponentFixture<DishesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
