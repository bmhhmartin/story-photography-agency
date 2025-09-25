export default function HeroBanner() {
    return (
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the beauty of the world with us. Adventure awaits where the red horizon meets the green valleys.
          </p>
          <a
            href="#"
            className="px-6 py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>
    );
  }
  