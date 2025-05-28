import axios from 'axios';

const WORDPRESS_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/fi707.wordpress.com/posts/';

interface WordPressAuthor {
  ID: number;
  login: string;
  name: string;
  URL: string;
  avatar_URL: string;
}

export interface WordPressPost {
  ID: number;
  site_ID: number;
  author: WordPressAuthor;
  date: string; // ISO 8601 date string
  modified: string; // ISO 8601 date string
  title: string;
  URL: string;
  short_URL: string;
  content: string; // HTML string
  excerpt: string; // HTML string
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  type: string;
  like_count: number;
  featured_image: string; // URL to the featured image, can be empty
  // Add other fields if needed, based on the JSON structure
}

interface WordPressPostsResponse {
  found: number;
  posts: WordPressPost[];
  // Potentially add 'meta' field if needed
}

export const fetchWordPressPosts = async (): Promise<WordPressPost[]> => {
  try {
    const response = await axios.get<WordPressPostsResponse>(WORDPRESS_API_URL);
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    // Depending on error handling strategy, you might want to throw the error
    // or return an empty array, or a specific error object.
    return []; 
  }
};

// You might want to add a function to fetch a single post by ID or slug later
// export const fetchWordPressPostById = async (id: number): Promise<WordPressPost | null> => {
//   try {
//     // The WordPress.com API for a single post is usually WORDPRESS_API_URL + id (might need adjustment for public API)
//     const response = await axios.get<WordPressPost>(`https://public-api.wordpress.com/rest/v1.1/sites/fi707.wordpress.com/posts/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching WordPress post with ID ${id}:`, error);
//     return null;
//   }
// };

// For fetching by slug with the public-api
export const fetchWordPressPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    // Note: The WordPress.com API for fetching by slug requires the slug to be part of the main path.
    // It doesn't typically return an array of posts like ?slug=... might on self-hosted.
    const response = await axios.get<WordPressPost>(`https://public-api.wordpress.com/rest/v1.1/sites/fi707.wordpress.com/posts/slug:${slug}`);
    return response.data; // The response directly contains the post object if found
  } catch (error) {
    // It's common for a 404 to be thrown if the slug isn't found.
    // Axios throws an error for non-2xx responses, so this catch block will handle it.
    console.error(`Error fetching WordPress post with slug ${slug}:`, error);
    return null;
  }
};

export interface WordPressCommentAuthor {
  ID: number;
  login: string;
  name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
}

export interface WordPressComment {
  ID: number;
  post: { ID: number }; // Information about the post this comment belongs to
  author: WordPressCommentAuthor;
  date: string; // ISO 8601 date string
  content: string; // HTML string
  status: string;
  parent: { ID: number } | false; // Parent comment if it's a reply
  like_count: number;
  i_like: boolean;
  // Add other fields as needed from the API response
}

interface WordPressCommentsResponse {
  found: number;
  comments: WordPressComment[];
  // Potentially add 'meta' field if needed
}

export const fetchWordPressPostComments = async (postId: number): Promise<WordPressComment[]> => {
  try {
    const response = await axios.get<WordPressCommentsResponse>(
      `https://public-api.wordpress.com/rest/v1.1/sites/fi707.wordpress.com/posts/${postId}/replies/`
    );
    return response.data.comments || []; // Ensure it returns an array even if comments is null/undefined
  } catch (error) {
    console.error(`Error fetching comments for post ID ${postId}:`, error);
    return [];
  }
}; 