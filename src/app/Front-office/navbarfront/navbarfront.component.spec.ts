import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfrontComponent } from './navbarfront.component';

describe('NavbarfrontComponent', () => {
  let component: NavbarfrontComponent;
  let fixture: ComponentFixture<NavbarfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
