import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactussComponent } from './contactuss.component';

describe('ContactussComponent', () => {
  let component: ContactussComponent;
  let fixture: ComponentFixture<ContactussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
