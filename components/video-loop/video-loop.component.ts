import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
declare var videojs: any;

@Component({
  selector: 'app-video-loop',
  templateUrl: './video-loop.component.html',
  styleUrls: ['./video-loop.component.css']
})
export class VideoLoopComponent implements OnInit{
  videos = [
    '../../../assets/background_video1.mp4',
    '../../../assets/background_video2.mp4',
    'video3.mp4'
  ];
  currentVideoIndex = 0;
  currentVideo?: string;

  constructor() {
    this.currentVideo = this.videos[this.currentVideoIndex];
  }

  ngOnInit(): void {
  }

  playNextVideo(): void {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.currentVideo = this.videos[this.currentVideoIndex];
  }

  getCurrentVideo(): string | undefined {
    return this.currentVideo;
  }

}