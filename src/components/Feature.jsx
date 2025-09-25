export default function Feature({ blok }) {
    return (
        <div className="feature">
            <h2>{blok.name || blok.title || 'Feature'}</h2>
            {blok.description && <p>{blok.description}</p>}
        </div>
    );
}