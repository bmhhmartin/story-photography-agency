import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

interface StoryblokResponse {
  data: {
    story: {
      content: {
        component: string;
        body: Array<{
          component: string;
          _uid: string;
          [key: string]: any;
        }>;
        _uid: string;
      };
    };
  };
}

export default async function Service() {
  const { data } = await fetchServiceData();

  return (
    <div className="page">
      <StoryblokServerComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchServiceData(): Promise<StoryblokResponse> {
  const storyblokApi = getStoryblokApi();
  try {
    return await storyblokApi.get(`cdn/stories/service`, { version: 'draft' });
  } catch (error) {
    console.error('Error fetching service story:', error);
    // Return a fallback story structure
    return {
      data: {
        story: {
          content: {
            component: 'page',
            body: [
              {
                component: 'teaser',
                headline: 'Our Photography Services',
                description: 'Professional photography services tailored to your needs',
                cta_text: 'Get Started',
                _uid: 'fallback-service-teaser'
              },
              {
                component: 'grid',
                title: 'What We Offer',
                columns: [
                  {
                    title: 'Wedding Photography',
                    description: 'Capture your special day with beautiful, timeless photos',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
                      alt: 'Wedding Photography'
                    }
                  },
                  {
                    title: 'Portrait Sessions',
                    description: 'Professional portraits for individuals, families, and businesses',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
                      alt: 'Portrait Photography'
                    }
                  },
                  {
                    title: 'Event Photography',
                    description: 'Corporate events, parties, and special occasions',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
                      alt: 'Event Photography'
                    }
                  },
                  {
                    title: 'Commercial Photography',
                    description: 'Product shots, real estate, and business photography',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
                      alt: 'Commercial Photography'
                    }
                  },
                  {
                    title: 'Photo Editing',
                    description: 'Professional post-processing and retouching services',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                      alt: 'Photo Editing'
                    }
                  },
                  {
                    title: 'Drone Photography',
                    description: 'Aerial shots and unique perspectives from above',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop',
                      alt: 'Drone Photography'
                    }
                  }
                ],
                _uid: 'fallback-service-grid'
              }
            ],
            _uid: 'fallback-service-page'
          }
        }
      }
    };
  }
}
