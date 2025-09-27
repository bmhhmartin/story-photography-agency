import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default function Blog({ blok }) {
    return (
        <div className="blog-section py-16 px-6">
            <div className="max-w-7xl mx-auto">
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