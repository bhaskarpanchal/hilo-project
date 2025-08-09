export interface Story {
  id: string;
  user: {
    username: string;
    avatarUrl: string;
  };
  seen: boolean;
}