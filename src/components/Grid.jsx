export default function Grid({ blok }) {
    return (
        <div className="grid-section py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {blok.title && (
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        {blok.title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blok.columns?.map((column, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            {column.image && (
                                <img 
                                    src={column.image.filename} 
                                    alt={column.image.alt || ''} 
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {column.title || `Column ${index + 1}`}
                            </h3>
                            <p className="text-gray-600">
                                {column.description || 'No description available'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}