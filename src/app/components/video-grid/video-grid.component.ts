import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type Video = {
  type: string;
  id: string;
  title: string;
  channel: string;
  views: string;
  channelImg: string;
  url?: SafeResourceUrl;
};

@Component({
  selector: 'app-video-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-grid.component.html',
  styleUrl: './video-grid.component.scss'
})
export class VideoGridComponent implements OnInit {
selectedType: string = 'all';

filteredVideos: Video[] = [];
  constructor(private sanitizer: DomSanitizer) {}

  allVideos: Video[] = [];
  visibleVideos: Video[] = [];

  batchSize = 6; 
  currentIndex = 0;

 ngOnInit(): void {

  const types = ['cars', 'tech', 'music', 'news'];

  this.allVideos = Array.from({ length: 50 }).map((_, i) => {

    const type = types[i % types.length];

    return {
      id: i % 2 === 0 ? "jdJoOhqCipA" : "dQw4w9WgXcQ",
      title: `Sample Video ${i + 1}`,
      channel: "Demo Channel",
      views: `${Math.floor(Math.random() * 10)}M views`,
      channelImg: "assets/channels/tv9.jpg",
      type: type
    };
  }).map(v => ({
    ...v,
    url: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${v.id}`
    )
  }));

  this.filteredVideos = this.allVideos;
  this.loadMore();
}
loadMore() {
  const source = this.getFilteredSource();

  const next = source.slice(
    this.currentIndex,
    this.currentIndex + this.batchSize
  );

  this.currentIndex += this.batchSize;

  this.filteredVideos = source.slice(0, this.currentIndex);
}

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 200;

    if (scrollPosition >= threshold) {
      this.loadMore();
    }
  }

  filterVideos(type: string) {
    
  this.selectedType = type;

  const source = this.allVideos.slice(0, this.currentIndex);

  if (type === 'all') {
    this.filteredVideos = source;
  } else {
    this.filteredVideos = source.filter(v => v.type === type);
  }

}
getFilteredSource(): Video[] {
  if (this.selectedType === 'all') {
    return this.allVideos;
  }
  return this.allVideos.filter(v => v.type === this.selectedType);
}
}