import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoInfoComponent } from './resto-info.component';

describe('RestoInfoComponent', () => {
  let component: RestoInfoComponent;
  let fixture: ComponentFixture<RestoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
