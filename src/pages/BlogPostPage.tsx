import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import { useBlogStore } from '../store/blogStore';
import { BlogPost } from '../types';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const { posts, fetchPosts } = useBlogStore();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    const currentPost = posts.find(p => p.slug === slug);
    setPost(currentPost || null);
  }, [posts, slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-96 relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <Container className="relative h-full flex items-end pb-16">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center space-x-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            <div className="mt-8 text-gray-800 whitespace-pre-wrap">{post.content}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPostPage;