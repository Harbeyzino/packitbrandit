import React, { useState, useEffect } from 'react';
import Container from '../components/ui/Container';
import { Form, Input, Select, Textarea } from '../components/ui/Form';
import Button from '../components/ui/Button';
import { useBlogStore } from '../store/blogStore';

const categories = [
  { value: 'sustainability', label: 'Sustainability' },
  { value: 'design', label: 'Packaging Design' },
  { value: 'industry', label: 'Industry Trends' },
  { value: 'tips', label: 'Tips & Guides' },
];

const AdminBlogPage: React.FC = () => {
  const { posts, addPost, deletePost, fetchPosts } = useBlogStore();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image_url: '',
    category: '',
    author: 'Admin'
  });

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addPost(formData);
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        image_url: '',
        category: '',
        author: 'Admin'
      });
      alert('Blog post published successfully!');
    } catch (error) {
      alert('Error publishing post: ' + (error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Admin</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New Post</h2>
            <Form
              onSubmit={handleSubmit}
              buttonText="Publish Post"
              className="space-y-6"
            >
              <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              
              <Input
                label="Featured Image URL"
                name="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://example.com/image.jpg"
                required
              />

              <Select
                label="Category"
                name="category"
                options={categories}
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
              
              <Textarea
                label="Excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                required
                rows={3}
              />
              
              <Textarea
                label="Content"
                name="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={10}
              />

              <Input
                label="Author"
                name="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </Form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
            
            <div className="space-y-6">
              {posts.map((post) => (
                <div 
                  key={post.id}
                  className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        Published on {new Date(post.created_at).toLocaleDateString()} by {post.author}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Edit functionality would go here
                          alert('Edit functionality coming soon!');
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 border-red-500 hover:bg-red-50"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this post?')) {
                            deletePost(post.id);
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              ))}

              {posts.length === 0 && (
                <p className="text-gray-500 text-center py-4">No posts yet. Create your first post above!</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminBlogPage;