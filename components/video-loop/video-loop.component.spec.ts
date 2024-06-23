import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoopComponent } from './video-loop.component';

describe('VideoLoopComponent', () => {
  let component: VideoLoopComponent;
  let fixture: ComponentFixture<VideoLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
