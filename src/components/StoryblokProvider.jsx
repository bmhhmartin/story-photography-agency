"use client";

import { getStoryblokApi } from "@/lib/storyblok";

export default function StoryblokProvider({ children }) {
  // Initialize Storyblok API on client side
  getStoryblokApi();
  return children;
}