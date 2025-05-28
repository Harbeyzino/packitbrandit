import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../ui/Card';
import Button from '../ui/Button';
import { fetchWordPressPosts, WordPressPost } from '../../services/wordpressService';

const BlogPreview: React.FC = () => {
  const [previewPosts, setPreviewPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await fetchWordPressPosts();
        setPreviewPosts(fetchedPosts.slice(0, 3));
        setError(null);
      } catch (err) {
        console.error("Error fetching blog posts for preview:", err);
        setError('Failed to load blog posts.');
      }
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          </div>
          <p className="text-center text-gray-600">Loading posts...</p>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          </div>
          <p className="text-center text-red-500">{error}</p>
        </Container>
      </section>
    );
  }

  if (previewPosts.length === 0) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          </div>
          <p className="text-center text-gray-600">No blog posts available yet.</p>
        </Container>
      </section>
    );
  }

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
            <Card key={post.ID} className="group transition-all duration-300 hover:shadow-lg flex flex-col h-full">
              <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                {post.featured_image ? (
                  <CardImage 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    {post.author && <span className="text-sm text-blue-500">{post.author.name}</span>}
                  </div>
                  <h3 
                    className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors clamp-2-lines" 
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                </CardHeader>
                <CardContent>
                  <div 
                    className="text-gray-600 clamp-3-lines" 
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="mt-4">
                    <Button variant="text" className="px-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button variant="outline">
              View All Articles
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;