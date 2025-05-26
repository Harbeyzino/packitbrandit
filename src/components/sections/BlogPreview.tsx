import React from 'react';
import Container from '../ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../ui/Card';
import Button from '../ui/Button';
import { useBlogStore } from '../../store/blogStore';

const BlogPreview: React.FC = () => {
  const { posts } = useBlogStore();
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, insights, and innovations in the packaging industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <Card key={post.id} className="group transition-all duration-300 hover:shadow-lg">
              <CardImage 
                src={post.imageUrl} 
                alt={post.title} 
                className="h-48 transition-transform duration-500 group-hover:scale-105"
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-blue-500">{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4">
                  <Button variant="text" className="px-0">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={() => window.location.href = '/blog'}>
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;