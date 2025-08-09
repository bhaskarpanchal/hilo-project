import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Stories } from '../../components/stories/stories';
import { PostCard } from '../../components/post-card/post-card';
import { Feed } from '../../services/feed';
import { Post } from '../../models/post';

@Component({
  selector: 'app-home',
  imports: [Stories, PostCard, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private readonly feed = inject(Feed);
  protected readonly posts: Post[] = this.feed.getFeed();
}
