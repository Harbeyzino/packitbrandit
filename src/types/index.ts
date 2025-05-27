export interface NavItem {
  title: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  slug: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  category: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}