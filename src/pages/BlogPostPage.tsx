import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import {
  fetchWordPressPostBySlug,
  fetchWordPressPosts, // Keep this for finding next/prev
  WordPressPost
} from '../services/wordpressService';
import Hero from '../components/sections/Hero';
import Card, { CardImage, CardHeader } from '../components/ui/Card'; // Ensure Card components are imported
import Preloader from '../components/ui/Preloader'; // Import Preloader

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State for next/previous posts
  const [previousPost, setPreviousPost] = useState<WordPressPost | null>(null);
  const [nextPost, setNextPost] = useState<WordPressPost | null>(null);

  // State for recent posts
  const [recentPosts, setRecentPosts] = useState<WordPressPost[]>([]);
  const [recentPostsLoading, setRecentPostsLoading] = useState<boolean>(true); // Separate loading for recent posts section

  useEffect(() => {
    const getPostDetails = async () => {
      if (!slug) {
        setError('Post slug not found.');
        setLoading(false);
        setRecentPostsLoading(false); // Also set recent posts loading to false
        return;
      }
      setLoading(true);
      setRecentPostsLoading(true);
      try {
        const fetchedPost = await fetchWordPressPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null);

          // Fetch all posts to find next and previous
          const allPosts = await fetchWordPressPosts(); 
          // Assuming API returns posts in a consistent order (e.g., date descending by default)
          const currentIndex = allPosts.findIndex(p => p.slug === slug);

          if (currentIndex !== -1) {
            if (currentIndex > 0) { // There is a newer post (previous in reverse chronological order)
              setPreviousPost(allPosts[currentIndex - 1]);
            } else {
              setPreviousPost(null); // Ensure it's reset if no previous post
            }
            if (currentIndex < allPosts.length - 1) { // There is an older post (next in reverse chronological order)
              setNextPost(allPosts[currentIndex + 1]);
            } else {
              setNextPost(null); // Ensure it's reset if no next post
            }
            // Populate recent posts, excluding the current one
            setRecentPosts(
              allPosts
                .filter(p => p.slug !== slug)
                .slice(0, 3) // Take up to 3 recent posts
            );
          } else {
            // Current post not found in allPosts list, still try to show some recent posts
            setRecentPosts(allPosts.slice(0, 3));
          }
        } else {
          setError('Blog post not found.');
        }
      } catch (err) {
        console.error(`Error fetching blog post details for slug ${slug}:`, err);
        setError('Failed to load blog post details.');
      }
      setLoading(false);
      setRecentPostsLoading(false);
    };

    getPostDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Preloader isLoading={loading} />
      </div>
    );
  }

  if (error || !post) {
    return (
      <Container className="py-8 md:py-16 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">{error || 'Could not load the blog post.'}</p>
        <Link 
          to="/blog" 
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          ← Back to Blog
        </Link>
      </Container>
    );
  }

  const heroTitle = post.title;

  return (
    <>
      <Hero 
        title={heroTitle} 
        subtitle={`Published on ${new Date(post.date).toLocaleDateString()} by ${post.author?.name || 'Unknown author'}`}
        image={post.featured_image || undefined} 
      />
      <section className="py-8 md:py-16 bg-white">
        <Container className="max-w-3xl mx-auto">
          <article 
            className="prose lg:prose-xl max-w-none mx-auto blog-content" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Next/Previous Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            {previousPost ? (
              <Link to={`/blog/${previousPost.slug}`} className="group max-w-[48%]">
                <span className="text-sm text-gray-500 group-hover:text-blue-600">Previous Post</span>
                <h4 
                  className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 clamp-1-line"
                  dangerouslySetInnerHTML={{ __html: previousPost.title }}
                />
              </Link>
            ) : (
              <div /> // Empty div to maintain space if no previous post
            )}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="text-right group max-w-[48%]">
                <span className="text-sm text-gray-500 group-hover:text-blue-600">Next Post</span>
                <h4 
                  className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 clamp-1-line"
                  dangerouslySetInnerHTML={{ __html: nextPost.title }}
                />
              </Link>
            ) : (
              <div /> // Empty div to maintain space if no next post
            )}
          </div>
          
          {/* Recent Posts Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recent Articles</h2>
            {recentPostsLoading ? (
              <div className="flex items-center justify-center py-8">
                <Preloader isLoading={recentPostsLoading} />
              </div>
            ) : recentPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recentPosts.map((rPost) => (
                  <Card key={rPost.ID} className="group flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                    <Link to={`/blog/${rPost.slug}`} className="flex flex-col h-full">
                      {rPost.featured_image ? (
                        <CardImage 
                          src={rPost.featured_image} 
                          alt={rPost.title} 
                          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-40 w-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                      <CardHeader className="flex-grow p-4">
                        <h3 
                          className="text-md font-semibold text-gray-800 group-hover:text-blue-600 transition-colors clamp-2-lines mb-1"
                          dangerouslySetInnerHTML={{ __html: rPost.title }}
                        />
                        <span className="text-xs text-gray-500">{new Date(rPost.date).toLocaleDateString()}</span>
                      </CardHeader>
                    </Link>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No other recent articles found.</p>
            )}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center"> {/* Centered Back to All Articles */}
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPostPage;