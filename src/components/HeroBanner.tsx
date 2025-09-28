interface HeroBannerProps {
  blok: {
    title?: string;
    descripiton?: string;
    buttonText?: string;
    buttonURL?: {
      url: string;
    };
    backgroundImage?: {
      filename: string;
    };
  };
}

export default function HeroBanner({ blok }: HeroBannerProps) {
    return (
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: blok?.backgroundImage?.filename
            ? `url(${blok.backgroundImage.filename})`
            : "url('/default-image.jpg')", // fallback
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {blok?.title}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {blok?.descripiton}
          </p>
          <a
            href={blok?.buttonURL?.url || "#"}
            className="px-6 py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            {blok?.buttonText}
          </a>
        </div>
      </section>
    );
  }
  