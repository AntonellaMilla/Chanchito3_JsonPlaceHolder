import { create } from 'zustand';
import { getPosts } from '../services/posts.service';

export const usePostStore = create((set) => ({
  posts: [],
  getPosts: async () => {
    const data = await getPosts();
    set({ posts: data });
  }
}));
