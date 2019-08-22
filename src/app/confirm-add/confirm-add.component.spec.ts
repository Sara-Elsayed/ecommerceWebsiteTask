import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddComponent } from './confirm-add.component';

describe('ConfirmAddComponent', () => {
  let component: ConfirmAddComponent;
  let fixture: ComponentFixture<ConfirmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
