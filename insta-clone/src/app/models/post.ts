export interface User {
  username: string;
  fullName: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  createdAt: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  likedByCurrentUser: boolean;
  createdAt: string;
  comments: Comment[];
}