interface GridProps {
  blok: {
    title?: string;
    columns?: Array<{
      name?: string;
      [key: string]: unknown;
    }>;
  };
}

export default function Grid({ blok }: GridProps) {
    return (
        <div className="grid-section py-16 px-6">
            <div className="container">
                {blok.title && (
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        {blok.title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blok.columns?.map((column, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-red-800 text-center">
                                {column.name || `Column ${index + 1}`}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}