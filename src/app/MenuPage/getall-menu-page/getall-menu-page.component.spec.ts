import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallMenuPageComponent } from './getall-menu-page.component';

describe('GetallMenuPageComponent', () => {
  let component: GetallMenuPageComponent;
  let fixture: ComponentFixture<GetallMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
