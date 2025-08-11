import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  imports: [],
  templateUrl: './suggestions.html',
  styleUrl: './suggestions.css'
})
export class Suggestions {
  profile = {
    name: 'Bhaskar',
    handle: 'bhaskarpanchal_',
    avatar: 'https://i.pravatar.cc/100?img=30'
  };

  suggestions = [
    {
      name: 'Shikha Jain',
      handle: '_shikha_jain_30',
      avatar: 'https://i.pravatar.cc/100?img=1',
      followedBy: 'Followed by karuna_rajak_ + 7 more'
    },
    {
      name: 'Isha',
      handle: 'heyyy_isha_01',
      avatar: 'https://i.pravatar.cc/100?img=2',
      followedBy: 'Suggested for you'
    },
    {
      name: 'Priyanka Panchal',
      handle: 'priyankapanchal274',
      avatar: 'https://i.pravatar.cc/100?img=3',
      followedBy: 'Suggested for you'
    },
    {
      name: 'Tanya Panchal',
      handle: 'tanya_panchal24',
      avatar: 'https://i.pravatar.cc/100?img=4',
      followedBy: 'Suggested for you'
    },
    {
      name: 'Sweeti Gautam',
      handle: 'sweetigautam__',
      avatar: 'https://i.pravatar.cc/100?img=5',
      followedBy: 'Suggested for you'
    }
  ];
}
