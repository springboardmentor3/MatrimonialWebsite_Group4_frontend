import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendrequestsComponent } from './sendrequests.component';

describe('SendrequestsComponent', () => {
  let component: SendrequestsComponent;
  let fixture: ComponentFixture<SendrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendrequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
