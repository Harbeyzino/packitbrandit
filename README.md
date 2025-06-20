# Dabi Packaging Ltd Website

This is a modern, responsive web application for Dabi Packaging Ltd, built with React, TypeScript, Vite, and Tailwind CSS. It features product and service listings, testimonials, blog integration (with WordPress as a headless CMS), and more.

## Features
- Product and service showcase
- Customer testimonials
- Blog integration (fetches posts from a WordPress site)
- Contact and quote request forms
- Responsive design with Tailwind CSS
- Easy deployment to Vercel
- **Image Showcase Section:** Responsive image display area for desktop and mobile


## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```cmd
   git clone <your-repo-url>
   cd Dabi-product-branding
   ```
2. Install dependencies:
   ```cmd
   npm install
   ```

### Development
Start the development server:
```cmd
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```cmd
npm run build
```

### Deployment
This project is ready for deployment on [Vercel](https://vercel.com/). It includes a `vercel.json` file for proper SPA routing.

#### Automatic Deployments
- Push to your connected GitHub branch to trigger a new deployment on Vercel.

#### Manual Deployments
- You can also deploy manually from the Vercel dashboard.

### Environment Variables
If you use any environment variables (e.g., for APIs), add them in the Vercel dashboard under Project Settings → Environment Variables.

### Blog Integration
- Blog posts are fetched from your WordPress site via the REST API.
- To display posts, ensure your WordPress site is public and has published posts.
- Update the WordPress API URL in `src/store/blogStore.ts` if needed.

### Customization
- Replace the logo in `src/assets/logo.png` with your own.
- Update content, colors, and sections as needed in the `src/` directory.

## License
This project is for Dabi Packaging Ltd. Please contact the owner for licensing details.
