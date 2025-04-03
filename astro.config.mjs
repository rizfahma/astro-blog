import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Add this line

// https://astro.build/config
export default defineConfig({
  // Add your site URL here
  site: 'https://your-site-url.com', // Replace with your actual domain
  integrations: [
    tailwind(),
    react(),
    
  ],
  vite: {
    // Đảm bảo biến môi trường được chuyển đến client
    define: {
      'import.meta.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.SPOTIFY_CLIENT_ID),
      'import.meta.env.SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET),
      'import.meta.env.SPOTIFY_REFRESH_TOKEN': JSON.stringify(process.env.SPOTIFY_REFRESH_TOKEN),
    },
  },
});
