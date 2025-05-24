import { BlogPost, Equipment, FAQ, NavItem, Product, Service, Testimonial } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "Equipment", href: "/equipment" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Custom Packaging Solutions",
    description: "Tailor-made packaging designed to fit your specific product needs with eco-friendly options available.",
    imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg"
  },
  {
    id: "2",
    name: "Retail Packaging",
    description: "Eye-catching packaging designed to make your products stand out on store shelves.",
    imageUrl: "https://images.pexels.com/photos/7319125/pexels-photo-7319125.jpeg"
  },
  {
    id: "3",
    name: "Shipping Containers",
    description: "Durable, protective packaging solutions for safely shipping your products worldwide.",
    imageUrl: "https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg"
  },
  {
    id: "4",
    name: "Sustainable Packaging",
    description: "Eco-friendly packaging options that reduce environmental impact without compromising quality.",
    imageUrl: "https://images.pexels.com/photos/7262996/pexels-photo-7262996.jpeg"
  }
];

export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Package Design",
    description: "Our team of expert designers will create custom packaging solutions that align with your brand identity and product requirements.",
    icon: "Palette"
  },
  {
    id: "2",
    name: "Production & Manufacturing",
    description: "State-of-the-art production facilities to bring your packaging designs to life with precision and quality.",
    icon: "Factory"
  },
  {
    id: "3",
    name: "Logistics & Distribution",
    description: "Comprehensive logistics solutions to ensure your packaged products reach their destination safely and on time.",
    icon: "Truck"
  },
  {
    id: "4",
    name: "Consulting Services",
    description: "Expert advice on packaging optimization, materials selection, and sustainability practices.",
    icon: "Lightbulb"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Organic Foods Co.",
    content: "Dabi Packaging transformed our product presentation with sustainable packaging solutions that perfectly aligned with our brand values. Their attention to detail and commitment to quality exceeded our expectations.",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    company: "Tech Innovations",
    content: "Working with Dabi has been a game-changer for our electronics packaging. Their designs are not only protective but also enhance our unboxing experience. Highly recommended!",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    id: "3",
    name: "Emma Chen",
    company: "Luxury Cosmetics",
    content: "The team at Dabi truly understands premium packaging. They helped us create packaging that communicates our brand's luxury positioning while maintaining sustainability.",
    imageUrl: "https://images.pexels.com/photos/3869346/pexels-photo-3869346.jpeg"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Sustainable Packaging",
    excerpt: "Discover how eco-friendly materials are revolutionizing the packaging industry and what this means for your business.",
    date: "June 15, 2025",
    author: "David Miller",
    imageUrl: "https://images.pexels.com/photos/5246121/pexels-photo-5246121.jpeg",
    slug: "future-sustainable-packaging"
  },
  {
    id: "2",
    title: "Packaging Design Trends for 2025",
    excerpt: "Stay ahead of the curve with these emerging packaging design trends that are capturing consumer attention.",
    date: "May 28, 2025",
    author: "Jennifer Lee",
    imageUrl: "https://images.pexels.com/photos/5966243/pexels-photo-5966243.jpeg",
    slug: "packaging-design-trends-2025"
  },
  {
    id: "3",
    title: "How to Choose the Right Packaging for Your Product",
    excerpt: "A comprehensive guide to selecting the perfect packaging solution that balances protection, aesthetics, and sustainability.",
    date: "April 10, 2025",
    author: "Robert Thompson",
    imageUrl: "https://images.pexels.com/photos/4498604/pexels-photo-4498604.jpeg",
    slug: "choose-right-packaging"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What types of packaging solutions do you offer?",
    answer: "We offer a wide range of packaging solutions including custom packaging, retail packaging, shipping containers, sustainable packaging, and specialized packaging for various industries."
  },
  {
    question: "How do I request a quote for my packaging needs?",
    answer: "You can request a quote by filling out our 'Request a Quote' form on our website, or by contacting our sales team directly. We'll need information about your product dimensions, quantities, and specific requirements."
  },
  {
    question: "Do you offer sustainable packaging options?",
    answer: "Yes, we are committed to sustainability and offer a variety of eco-friendly packaging solutions using recyclable, biodegradable, and compostable materials."
  },
  {
    question: "What is the typical turnaround time for custom packaging orders?",
    answer: "Turnaround times vary depending on the complexity of your project, quantities, and current production schedules. Typically, custom packaging projects take 2-4 weeks from approval to delivery."
  },
  {
    question: "Can you help with package design services?",
    answer: "Absolutely! Our experienced design team can help create packaging that aligns with your brand identity and meets your specific product requirements."
  },
  {
    question: "Do you have minimum order quantities?",
    answer: "Yes, we do have minimum order quantities that vary by product type. However, we strive to be flexible and can often accommodate smaller orders for new customers or special projects."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including food & beverage, retail, cosmetics, electronics, healthcare, e-commerce, and many more. Our solutions can be customized for any industry's specific requirements."
  },
  {
    question: "Can you create custom-shaped packaging?",
    answer: "Yes! We specialize in creating custom-shaped packaging that fits your product perfectly and stands out on the shelf. Our design team can help bring your unique packaging vision to life."
  }
];

export const EQUIPMENT: Equipment[] = [
  {
    id: "1",
    name: "Automatic Packaging Machine",
    description: "High-speed automatic packaging solution ideal for medium to high volume production environments.",
    features: ["Adjustable speed control", "Multiple packaging formats", "Easy maintenance", "Digital interface"],
    imageUrl: "https://images.pexels.com/photos/5025617/pexels-photo-5025617.jpeg"
  },
  {
    id: "2",
    name: "Shrink Wrap System",
    description: "Complete shrink wrapping solution for securing and protecting products during shipping and display.",
    features: ["Temperature control", "Adjustable sealing mechanism", "Compatible with various film types", "Energy efficient"],
    imageUrl: "https://images.pexels.com/photos/5025659/pexels-photo-5025659.jpeg"
  },
  {
    id: "3",
    name: "Labeling Equipment",
    description: "Precision labeling systems for consistent brand presentation and regulatory compliance.",
    features: ["High accuracy application", "Variable data printing", "Multiple label formats", "Integration capabilities"],
    imageUrl: "https://images.pexels.com/photos/8197512/pexels-photo-8197512.jpeg"
  },
  {
    id: "4",
    name: "Case Packing System",
    description: "Automated case packing solution for efficient end-of-line packaging operations.",
    features: ["Flexible case configurations", "Quick changeover", "Gentle product handling", "High throughput"],
    imageUrl: "https://images.pexels.com/photos/5792901/pexels-photo-5792901.jpeg"
  },
  {
    id: "5",
    name: "Palletizing Robot",
    description: "Robotic palletizing system for precise and efficient stacking of packed products.",
    features: ["Multiple pattern programming", "Integrated safety features", "Heavy lifting capacity", "Reduced labor costs"],
    imageUrl: "https://images.pexels.com/photos/8197263/pexels-photo-8197263.jpeg"
  },
  {
    id: "6",
    name: "Filling & Sealing Machine",
    description: "Automated filling and sealing equipment for liquid, powder, or granular products.",
    features: ["Precise volume control", "Contamination prevention", "Various container compatibility", "High-speed operation"],
    imageUrl: "https://images.pexels.com/photos/4482945/pexels-photo-4482945.jpeg"
  }
];