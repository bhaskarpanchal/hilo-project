import { Injectable } from '@angular/core';
import { Post, User } from '../models/post';
import { Story } from '../models/story';

function avatar(idx: number): string {
  return `https://i.pravatar.cc/150?img=${idx}`;
}

function photo(id: number): string {
  return `https://picsum.photos/id/${id}/600/600`;
}

@Injectable({ providedIn: 'root' })
export class Feed {
  private readonly users: User[] = [
    { username: 'you', fullName: 'You', avatarUrl: avatar(68) },
    { username: 'jane', fullName: 'Jane Doe', avatarUrl: avatar(32) },
    { username: 'john', fullName: 'John Smith', avatarUrl: avatar(15) },
    { username: 'alex', fullName: 'Alex Johnson', avatarUrl: avatar(7) },
    { username: 'maria', fullName: 'Maria Garcia', avatarUrl: avatar(23) },
  ];

  getStories(): Story[] {
    return this.users.map((u, i) => ({
      id: `story-${i}`,
      user: { username: u.username, avatarUrl: u.avatarUrl },
      seen: i % 3 === 0,
    }));
  }

  getFeed(): Post[] {
    const sampleCaptions = [
      'Sunset vibes 🌅',
      'Coffee and code ☕💻',
      'Exploring the city 🏙️',
      'Weekend getaway ✈️',
      'Nature walk 🌿',
    ];

    const photos = [11, 27, 34, 82, 101, 128, 203, 244, 301];

    return photos.map((id, index) => {
      const user = this.users[(index + 1) % this.users.length];
      return {
        id: `post-${id}`,
        user,
        imageUrl: photo(id),
        caption: sampleCaptions[index % sampleCaptions.length],
        likes: Math.floor(Math.random() * 1000),
        likedByCurrentUser: false,
        createdAt: new Date(Date.now() - index * 3600_000).toISOString(),
        comments: [],
      } as Post;
    });
  }

  getExplore(): string[] {
    const ids = [12, 18, 22, 29, 37, 49, 58, 63, 77, 88, 96, 117];
    return ids.map((id) => photo(id));
  }

  getUser(username: string | undefined): User | undefined {
    if (!username) return this.users[0];
    return this.users.find((u) => u.username === username);
  }

  getPostsByUser(username: string): Post[] {
    return this.getFeed().filter((p) => p.user.username === username);
  }
}
