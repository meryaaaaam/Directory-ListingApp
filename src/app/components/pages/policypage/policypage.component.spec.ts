import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicypageComponent } from './policypage.component';

describe('PolicypageComponent', () => {
  let component: PolicypageComponent;
  let fixture: ComponentFixture<PolicypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
