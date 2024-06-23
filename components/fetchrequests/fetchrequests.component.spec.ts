import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchrequestsComponent } from './fetchrequests.component';

describe('FetchrequestsComponent', () => {
  let component: FetchrequestsComponent;
  let fixture: ComponentFixture<FetchrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchrequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
