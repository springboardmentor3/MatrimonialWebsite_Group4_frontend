import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreplyComponent } from './getreply.component';

describe('GetreplyComponent', () => {
  let component: GetreplyComponent;
  let fixture: ComponentFixture<GetreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetreplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
