import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAction } from './call-action';

describe('CallAction', () => {
  let component: CallAction;
  let fixture: ComponentFixture<CallAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
