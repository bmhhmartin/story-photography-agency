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
          [key: string]: unknown;
        }>;
        _uid: string;
      };
    };
  };
}

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokServerComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData(): Promise<StoryblokResponse> {
  const storyblokApi = getStoryblokApi();
  try {
    return await storyblokApi.get(`cdn/stories/homepage`, { version: 'draft' });
  } catch (error) {
    console.error('Error fetching story:', error);
  }
}