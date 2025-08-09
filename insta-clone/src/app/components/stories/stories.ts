import { Component, inject } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Feed } from '../../services/feed';
import { Story } from '../../models/story';

@Component({
  selector: 'app-stories',
  imports: [NgFor, NgClass],
  templateUrl: './stories.html',
  styleUrl: './stories.scss'
})
export class Stories {
  private readonly feed = inject(Feed);
  protected readonly stories: Story[] = this.feed.getStories();
}
