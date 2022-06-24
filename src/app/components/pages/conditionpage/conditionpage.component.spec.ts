import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionpageComponent } from './conditionpage.component';

describe('ConditionpageComponent', () => {
  let component: ConditionpageComponent;
  let fixture: ComponentFixture<ConditionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
