import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfavouritesComponent } from './getfavourites.component';

describe('GetfavouritesComponent', () => {
  let component: GetfavouritesComponent;
  let fixture: ComponentFixture<GetfavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetfavouritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetfavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
