import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  try {
    return await storyblokApi.get(`cdn/stories/homepage`, { version: 'draft' });
  } catch (error) {
    console.error('Error fetching story:', error);
    // Return a fallback story structure
    return {
      data: {
        story: {
          content: {
            component: 'page',
            body: [
              {
                component: 'teaser',
                headline: 'Welcome to Story Photography Agency',
                description: 'Capturing moments that last a lifetime with professional photography services',
                cta_text: 'View Our Work',
                _uid: 'fallback-teaser'
              },
              {
                component: 'grid',
                title: 'Our Services',
                columns: [
                  {
                    title: 'Wedding Photography',
                    description: 'Beautiful wedding moments captured forever',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
                      alt: 'Wedding Photography'
                    }
                  },
                  {
                    title: 'Portrait Sessions',
                    description: 'Professional portrait photography for all occasions',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
                      alt: 'Portrait Photography'
                    }
                  },
                  {
                    title: 'Event Photography',
                    description: 'Corporate events and special occasions',
                    image: {
                      filename: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
                      alt: 'Event Photography'
                    }
                  }
                ],
                _uid: 'fallback-grid'
              }
            ]
          }
        }
      }
    };
  }
}