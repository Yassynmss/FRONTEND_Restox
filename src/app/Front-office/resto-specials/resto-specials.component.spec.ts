import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoSpecialsComponent } from './resto-specials.component';

describe('RestoSpecialsComponent', () => {
  let component: RestoSpecialsComponent;
  let fixture: ComponentFixture<RestoSpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoSpecialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
