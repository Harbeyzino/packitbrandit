import { create } from 'zustand';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../utils/constants';

interface BlogStore {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  updatePost: (post: BlogPost) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: BLOG_POSTS,
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter(post => post.id !== id) })),
  updatePost: (updatedPost) => set((state) => ({
    posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)
  })),
}));