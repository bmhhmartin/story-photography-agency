import {
    StoryblokServerComponent
} from '@storyblok/react/rsc';

interface PageProps {
  blok: {
    body?: Array<{
      _uid: string;
      component: string;
      [key: string]: unknown;
    }>;
  };
}
    
export default function Page({ blok }: PageProps) {
    return (
        <main>
            {blok.body?.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
}