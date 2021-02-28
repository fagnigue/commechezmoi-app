import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendvalidationComponent } from './sendvalidation.component';

describe('SendvalidationComponent', () => {
  let component: SendvalidationComponent;
  let fixture: ComponentFixture<SendvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
