import { Component } from '@angular/core';
import { DrawerService } from '../../services/drawer.service';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent {
  _visible = false;
  shortcuts: any;
  youList: any;
  exploreList:any;
  subscription: { label: string; icon: string }[];
  constructor(private drawerService: DrawerService) {
    this.drawerService.visible$.subscribe((v) => {
      this._visible = v;
    });
    this.shortcuts = [
      {
        isActive: true,
        label: 'Home',
        icon: PrimeIcons.HOME,
      },
      {
        isActive: false,
        label: 'Sorts',
        icon: PrimeIcons.PLAY,
      },
    ];

    this.youList = [
      {
        label: 'Your channel',
        icon: PrimeIcons.USER,
      },
      {
        label: 'History',
        icon: PrimeIcons.HISTORY,
      },
      {
        label: 'Playlists',
        icon: PrimeIcons.PLAY,
      },
      {
        label: 'Watch later',
        icon: PrimeIcons.CLOCK,
      },
      {
        label: 'Liked videos',
        icon: PrimeIcons.THUMBS_UP,
      },
      {
        label: 'Downloads',
        icon: PrimeIcons.DOWNLOAD,
      },
    ];
     this.exploreList = [
      {
        label: 'Shopping',
        icon: PrimeIcons.SHOPPING_BAG,
      },
      {
        label: 'Music',
        icon: PrimeIcons.TIKTOK,
      },
      {
        label: 'Films',
        icon: PrimeIcons.VIDEO,
      },
      {
        label: 'Live',
        icon: PrimeIcons.MEGAPHONE,
      },
      {
        label: 'Gaming',
        icon: PrimeIcons.THUMBS_UP,
      },
      {
        label: 'news',
        icon: PrimeIcons.REDDIT,
      },
      {
        label: 'Sport',
        icon: PrimeIcons.TROPHY,
      },
      {
        label: 'Courses',
        icon: PrimeIcons.BOOK,
      },
    ];

    this.subscription = [
      {
        label: 'Tv9 Kannada',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Tv9 Telagu',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Public Tv',
        icon: 'assets/channels/public.jpg',
      },
      {
        label: 'Tv9 Kannada',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Tv9 Telagu',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Public Tv',
        icon: 'assets/channels/public.jpg',
      },
      {
        label: 'Tv9 Kannada',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Tv9 Telagu',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Public Tv',
        icon: 'assets/channels/public.jpg',
      },
      {
        label: 'Tv9 Kannada',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Tv9 Telagu',
        icon: 'assets/channels/tv9.jpg',
      },
      {
        label: 'Public Tv',
        icon: 'assets/channels/public.jpg',
      },
    ];
  }

  showAll = false;

  get visibleItems() {
    return this.showAll ? this.subscription : this.subscription.slice(0, 4);
  }

  toggleItems() {
    this.showAll = !this.showAll;
  }

   showAllExplore = false;

  get visibleExploreItems() {
    return this.showAllExplore ? this.exploreList : this.exploreList.slice(0, 4);
  }

  toggleExploreItems() {
    this.showAllExplore = !this.showAllExplore;
  }
}
