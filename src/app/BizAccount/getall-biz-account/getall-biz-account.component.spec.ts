import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallBizAccountComponent } from './getall-biz-account.component';

describe('GetallBizAccountComponent', () => {
  let component: GetallBizAccountComponent;
  let fixture: ComponentFixture<GetallBizAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallBizAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallBizAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
