interface FeatureProps {
  blok: {
    name?: string;
    description?: string;
  };
}

export default function Feature({ blok }: FeatureProps) {
    return (
        <div className="feature">
            <h2 className="text-center text-2xl font-bold py-10">{blok.name || 'Feature title'}</h2>
            {blok.description && <p>{blok.description}</p>}
        </div>
    );
}