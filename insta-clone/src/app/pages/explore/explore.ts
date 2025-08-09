import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Feed } from '../../services/feed';

@Component({
  selector: 'app-explore',
  imports: [NgFor],
  templateUrl: './explore.html',
  styleUrl: './explore.scss'
})
export class Explore {
  private readonly feed = inject(Feed);
  protected readonly images: string[] = this.feed.getExplore();
}
