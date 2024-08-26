import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallMenuComponent } from './getall-menu.component';

describe('GetallMenuComponent', () => {
  let component: GetallMenuComponent;
  let fixture: ComponentFixture<GetallMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
