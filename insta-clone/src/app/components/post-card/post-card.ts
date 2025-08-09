import { Component, Input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  @Input({ required: true }) post!: Post;
  protected readonly liked = signal(false);
  protected likesCount = 0;

  ngOnInit(): void {
    this.liked.set(this.post.likedByCurrentUser);
    this.likesCount = this.post.likes;
  }

  toggleLike(): void {
    const newValue = !this.liked();
    this.liked.set(newValue);
    this.likesCount += newValue ? 1 : -1;
  }
}
