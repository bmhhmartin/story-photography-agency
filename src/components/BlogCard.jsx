export default function BlogCard({ blok }) {
    return (
        <div className="blog-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {blok.card_image && (
                <div className="relative h-48 overflow-hidden">
                    <img 
                        src={blok.card_image.filename || blok.card_image} 
                        alt={blok.card_image.alt || blok.card_title || 'Blog post image'} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {blok.card_title || 'Blog Post Title'}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {blok.card_description || 'Blog post description goes here...'}
                </p>
                {blok.button_text && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                        {blok.button_text}
                    </button>
                )}
            </div>
        </div>
    );
}