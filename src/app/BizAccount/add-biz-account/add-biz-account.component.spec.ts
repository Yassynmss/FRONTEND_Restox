import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBizAccountComponent } from './add-biz-account.component';

describe('AddBizAccountComponent', () => {
  let component: AddBizAccountComponent;
  let fixture: ComponentFixture<AddBizAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBizAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBizAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
