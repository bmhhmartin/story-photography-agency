import BlogCard from "@/components/BlogCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import HeroBanner from "@/components/HeroBanner";
import Page from "@/components/Page";
import Teaser from "@/components/Teaser";

import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc";

// Check if access token is provided
const accessToken = process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN || 'your-preview-token';

// Initialize Storyblok
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    teaser: Teaser,
    grid: Grid,
    BlogCard: BlogCard,
    HeroBanner: HeroBanner,
    footer: Footer,
  },
});

// Export the API function properly
export { getStoryblokApi };
