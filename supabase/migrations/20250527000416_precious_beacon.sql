/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `author` (text)
      - `slug` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published` (boolean)
      - `category` (text)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policies for:
      - Anyone can read published posts
      - Only authenticated admins can create/update/delete posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text NOT NULL,
  author text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT true,
  category text NOT NULL
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published posts
CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Allow authenticated admins to manage posts
CREATE POLICY "Admins can manage posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');