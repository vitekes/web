export interface Contest {
  count_participants: number;
  criteries: string;
  description: string;
  end_date: string;
  id: number;
  item_type: string;
  language: string;
  preview: string;
  start_date: string;
  title: string;
}

export interface Post {
  amount: null;
  content: string;
  count_comments: number;
  count_likes: number;
  count_views: number;
  date: string;
  id: number;
  is_paid: boolean;
  language: string;
  namespace: string;
  pinned_comment: null;
  preview: string;
  title: string;
  user: string;
}

interface Result {
  user: string;
  post: string;
  pk: number;
}
export interface ContestDetails extends Contest {
  posts: Post[];
  results: Record<string, Result[]>;
}

export interface ShortContest {
  title: string;
  start_date: string;
  end_date: string;
  count_participants: number;
  preview: string;
  description: string;
}
