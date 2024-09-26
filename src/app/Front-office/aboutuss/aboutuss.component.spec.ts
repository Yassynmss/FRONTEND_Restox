import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutussComponent } from './aboutuss.component';

describe('AboutussComponent', () => {
  let component: AboutussComponent;
  let fixture: ComponentFixture<AboutussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
