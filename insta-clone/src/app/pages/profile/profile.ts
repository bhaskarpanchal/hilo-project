import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Feed } from '../../services/feed';
import { Post, User } from '../../models/post';

@Component({
  selector: 'app-profile',
  imports: [NgIf, NgFor],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  private readonly route = inject(ActivatedRoute);
  private readonly feed = inject(Feed);

  protected user?: User;
  protected posts: Post[] = [];

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username') ?? 'you';
    this.user = this.feed.getUser(username);
    if (this.user) {
      this.posts = this.feed.getFeed().filter(p => p.user.username === this.user!.username);
    }
  }
}
