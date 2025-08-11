import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stories',
  imports: [NgFor],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    { name: 'p_for_prin...', avatar: 'https://i.pravatar.cc/100?img=2' },
    { name: 'shriramhe...', avatar: 'https://i.pravatar.cc/100?img=3' },
    { name: 'ritesh_722', avatar: 'https://i.pravatar.cc/100?img=4' },
    { name: 'arpita.rajp...', avatar: 'https://i.pravatar.cc/100?img=5' },
    { name: 'rvcjinsta', avatar: 'https://i.pravatar.cc/100?img=6' },
    { name: 'lakshya_si...', avatar: 'https://i.pravatar.cc/100?img=7' },
    { name: 'amit', avatar: 'https://i.pravatar.cc/100?img=8' },
    { name: 'zara', avatar: 'https://i.pravatar.cc/100?img=9' },
    { name: 'nisha', avatar: 'https://i.pravatar.cc/100?img=10' },
    { name: 'vivek', avatar: 'https://i.pravatar.cc/100?img=11' },
  ];
}
