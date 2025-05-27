import { create } from 'zustand';
import { BlogPost } from '../types';

interface BlogStore {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://fi707.wordpress.com/wp-json/wp/v2/posts?_embed');
      if (!response.ok) throw new Error('Failed to fetch posts from WordPress');
      const data = await response.json();
      // Map WordPress post data to BlogPost type
      const posts: BlogPost[] = data.map((post: any) => ({
        id: post.id.toString(),
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
        content: post.content.rendered || '',
        image_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        author: post._embedded?.author?.[0]?.name || 'Unknown',
        slug: post.slug,
        created_at: post.date || '',
        updated_at: post.modified || '',
        published: post.status === 'publish',
        category: (post._embedded?.['wp:term']?.[0]?.[0]?.name || '').toLowerCase() || 'uncategorized',
      }));
      set({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));