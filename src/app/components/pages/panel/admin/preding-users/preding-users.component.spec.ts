import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredingUsersComponent } from './preding-users.component';

describe('PredingUsersComponent', () => {
  let component: PredingUsersComponent;
  let fixture: ComponentFixture<PredingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
