import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBizAccountComponent } from './edit-biz-account.component';

describe('EditBizAccountComponent', () => {
  let component: EditBizAccountComponent;
  let fixture: ComponentFixture<EditBizAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBizAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBizAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
