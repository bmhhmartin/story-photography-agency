import { StoryblokServerComponent } from '@storyblok/react/rsc';

interface BlogProps {
  blok: {
    title?: string;
    body?: Array<{
      _uid: string;
      component: string;
      [key: string]: unknown;
    }>;
  };
}

export default function Blog({ blok }: BlogProps) {
    return (
        <div>
            <div>
                {blok.title && (
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        {blok.title}
                    </h2>
                )}
                    {blok.body?.map((nestedBlok) => (
                        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
                    ))}
            </div>
        </div>
    );
}