import Feature from "@/components/Feature";
import Page from "@/components/Page";

import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

// Check if access token is provided
const accessToken = process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error(
    "STORYBLOK_DELIVERY_API_ACCESS_TOKEN is required. Please add it to your .env.local file. " +
    "Get your token from: https://app.storyblok.com/#!/me/account?tab=token"
  );
}

export const getStoryblokApi = storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
  },
  apiOptions: {
    endpoint: "https://api.storyblok.com",
  },
});