import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDishesComponent } from './new-dishes.component';

describe('NewDishesComponent', () => {
  let component: NewDishesComponent;
  let fixture: ComponentFixture<NewDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
