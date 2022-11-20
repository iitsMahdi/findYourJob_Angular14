import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompComponent } from './signup-comp.component';

describe('SignupCompComponent', () => {
  let component: SignupCompComponent;
  let fixture: ComponentFixture<SignupCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
