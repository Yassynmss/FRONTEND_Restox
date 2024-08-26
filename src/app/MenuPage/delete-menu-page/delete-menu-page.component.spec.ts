import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenuPageComponent } from './delete-menu-page.component';

describe('DeleteMenuPageComponent', () => {
  let component: DeleteMenuPageComponent;
  let fixture: ComponentFixture<DeleteMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
