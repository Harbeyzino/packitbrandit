import { create } from 'zustand';
import { BlogPost } from '../types';
import { supabase } from '../lib/supabase';

interface BlogStore {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  addPost: (post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ posts: data || [] });
    } catch (error) {
      console.error('Error fetching posts:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  addPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          ...post,
          slug: post.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          published: true
        }])
        .select()
        .single();

      if (error) throw error;
      set((state) => ({ posts: [data, ...state.posts] }));
    } catch (error) {
      console.error('Error adding post:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  deletePost: async (id) => {
    set({ loading: true, error: null });
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      set((state) => ({
        posts: state.posts.filter(post => post.id !== id)
      }));
    } catch (error) {
      console.error('Error deleting post:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  updatePost: async (id, post) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          ...post,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      set((state) => ({
        posts: state.posts.map(p => p.id === id ? data : p)
      }));
    } catch (error) {
      console.error('Error updating post:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));