import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  profile = {
    name: 'bhaskar',
    handle: 'bhaskarpanchal_',
    avatar: 'https://i.pravatar.cc/100?img=30',
  };

  // Navigation items similar to Instagram left rail
  navItems = [
    { label: 'Home', icon: 'ri-home-line', active: true },
    { label: 'Search', icon: 'ri-search-line' },
    { label: 'Explore', icon: 'ri-compass-3-line' },
    { label: 'Reels', icon: 'ri-movie-line' },
    { label: 'Messages', icon: 'ri-message-2-line', badge: 7 },
    { label: 'Notifications', icon: 'ri-heart-line' },
    { label: 'Create', icon: 'ri-add-box-line' },
    { label: 'Profile', type: 'profile' },
  ];

  bottomItems = [
    { label: 'More', icon: 'ri-menu-line' },
    { label: 'Also from Meta', icon: 'ri-apps-2-line' },
  ];
}
