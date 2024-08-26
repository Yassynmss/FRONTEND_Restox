import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallLanguageComponent } from './getall-language.component';

describe('GetallLanguageComponent', () => {
  let component: GetallLanguageComponent;
  let fixture: ComponentFixture<GetallLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
