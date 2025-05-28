import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../components/ui/Card';
import Button from '../components/ui/Button'; // For potential future use (e.g., pagination)
import Hero from '../components/sections/Hero'; // Optional: for a page title/banner
import { fetchWordPressPosts, WordPressPost } from '../services/wordpressService';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await fetchWordPressPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError('Failed to load blog posts.');
      }
      setLoading(false);
    };

    getPosts();
  }, []);

  // Optional: Add a simple Hero section for the page title
  const pageTitle = "Our Blog";
  const pageSubtitle = "Explore the latest articles, insights, and news from our team.";

  return (
    <>
      <Hero title={pageTitle} subtitle={pageSubtitle} />
      <section className="py-16 bg-gray-50">
        <Container>
          {loading && <p className="text-center text-gray-600">Loading posts...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && posts.length === 0 && (
            <p className="text-center text-gray-600">No blog posts available yet. Check back soon!</p>
          )}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.ID} className="group transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                  <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                    {post.featured_image ? (
                      <CardImage 
                        src={post.featured_image} 
                        alt={post.title} 
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                    <CardHeader className="flex-grow">
                      <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        {post.author && <span className="text-blue-500">{post.author.name}</span>}
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
                        {/* The entire card is a link, so this button acts as part of it */}
                        <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Read More →
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          )}
          {/* TODO: Add pagination if there are many posts */}
        </Container>
      </section>
    </>
  );
};

export default BlogPage;