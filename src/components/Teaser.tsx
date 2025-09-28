interface TeaserProps {
  blok: {
    headline?: string;
    description?: string;
    cta_text?: string;
  };
}

export default function Teaser({ blok }: TeaserProps) {
    return (
        <div className="teaser bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {blok.headline || 'Welcome to Our Photography Agency'}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {blok.description || 'Capturing moments that last a lifetime'}
                </p>
                {blok.cta_text && (
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        {blok.cta_text}
                    </button>
                )}
            </div>
        </div>
    );
}