import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCombiComponent } from './delete-combi.component';

describe('DeleteCombiComponent', () => {
  let component: DeleteCombiComponent;
  let fixture: ComponentFixture<DeleteCombiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCombiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
