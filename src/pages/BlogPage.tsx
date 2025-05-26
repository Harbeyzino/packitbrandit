import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import Card, { CardContent, CardHeader, CardImage } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Form, Input } from '../components/ui/Form';
import { Search } from 'lucide-react';
import { useBlogStore } from '../store/blogStore';

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'sustainability', name: 'Sustainability' },
  { id: 'design', name: 'Packaging Design' },
  { id: 'industry', name: 'Industry Trends' },
  { id: 'tips', name: 'Tips & Guides' },
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { posts } = useBlogStore();
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      <Hero
        title="Packaging Insights"
        subtitle="Stay informed with the latest trends, innovations, and best practices in the packaging industry"
        image="https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg"
        primaryButtonText="Subscribe to Updates"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`text-left w-full px-2 py-1.5 rounded-md transition-colors ${
                          activeCategory === category.id
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to receive the latest packaging insights directly in your inbox.
                </p>
                <Form 
                  buttonText="Subscribe"
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing!');
                  }}
                >
                  <Input
                    label=""
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </Form>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeCategory === 'all' ? 'All Articles' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <div className="text-gray-500">
                  Showing {filteredPosts.length} articles
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="h-full group transition-all duration-300 hover:shadow-lg">
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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;