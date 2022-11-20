import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWorkerComponent } from './signup-worker.component';

describe('SignupWorkerComponent', () => {
  let component: SignupWorkerComponent;
  let fixture: ComponentFixture<SignupWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
