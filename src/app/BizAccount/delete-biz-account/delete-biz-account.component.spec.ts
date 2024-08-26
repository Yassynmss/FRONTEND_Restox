import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBizAccountComponent } from './delete-biz-account.component';

describe('DeleteBizAccountComponent', () => {
  let component: DeleteBizAccountComponent;
  let fixture: ComponentFixture<DeleteBizAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBizAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBizAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
