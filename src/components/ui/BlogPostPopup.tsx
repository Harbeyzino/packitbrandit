import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordPressPost } from '../../services/wordpressService';

interface BlogPostPopupProps {
  isOpen: boolean;
  onClose: () => void;
  post: WordPressPost | null;
}

const BlogPostPopup: React.FC<BlogPostPopupProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-popup-appear">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 truncate pr-4" title={post.title}>
            {post.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Close blog post popup"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div 
          className="p-4 md:p-6 overflow-y-auto prose max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 border-t mt-auto bg-gray-50 rounded-b-lg">
          <Link 
            to={`/blog/${post.slug}`}
            onClick={onClose} // Close popup when navigating
            className="text-blue-600 hover:text-blue-800 hover:underline mb-2 sm:mb-0 text-sm font-medium"
          >
            Read on Blog Page
          </Link>
          <Link 
            to="/blog"
            onClick={onClose} // Close popup when navigating
            className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPopup; 