import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [NgFor],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  posts = [
    {
      user: 'adultsociety',
      avatar: 'https://i.pravatar.cc/100?img=15',
      time: '24m',
      image:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      user: 'travel_diaries',
      avatar: 'https://i.pravatar.cc/100?img=12',
      time: '1h',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      caption: 'Sunset vibes at the beach.',
    },
    {
      user: 'foodielove',
      avatar: 'https://i.pravatar.cc/100?img=20',
      time: '2h',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
      caption: 'Best burger in town!',
    },
    {
      user: 'nature_lover',
      avatar: 'https://i.pravatar.cc/100?img=25',
      time: '3h',
      image:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop',
      caption: 'Into the wild.',
    },
    {
      user: 'art_attack',
      avatar: 'https://i.pravatar.cc/100?img=40',
      time: '5h',
      image:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop',
      caption: 'Creativity is intelligence having fun.',
    },
    {
      user: 'tech_geek',
      avatar: 'https://i.pravatar.cc/100?img=50',
      time: '8h',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      caption: 'The future is now.',
    },
    {
      user: 'minimalist',
      avatar: 'https://i.pravatar.cc/100?img=60',
      time: '12h',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
      caption: 'Less is more.',
    },

    {
      user: 'city_lights',
      avatar: 'https://i.pravatar.cc/100?img=18',
      time: '15h',
      image:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop',
      caption: 'Nightlife in the city.',
    },
    {
      user: 'mountain_hiker',
      avatar: 'https://i.pravatar.cc/100?img=22',
      time: '18h',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
      caption: 'Reached the summit!',
    },
    {
      user: 'pet_paradise',
      avatar: 'https://i.pravatar.cc/100?img=33',
      time: '20h',
      image:
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop',
      caption: 'Puppy love.',
    },
    {
      user: 'bookworm',
      avatar: 'https://i.pravatar.cc/100?img=44',
      time: '22h',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      caption: 'Lost in a good book.',
    },
    {
      user: 'gamerzone',
      avatar: 'https://i.pravatar.cc/100?img=77',
      time: '2d',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      caption: 'Level up!',
    }
  ];
}
