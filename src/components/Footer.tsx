import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - About */}
          <div>
            <Link href="/">
                <div className="text-3xl font-extrabold">
                    <span className="text-red-600">Pixel</span>
                    <span className="text-green-600">Pro</span>
                    <span className="text-gray-600">Agency</span>
                </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Capturing moments that last a lifetime. We specialize in creative photography 
              and storytelling through stunning visuals.
            </p>
          </div>
  
          {/* Column 2 - Portfolio */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Weddings</a></li>
              <li><a href="#" className="hover:text-red-500">Events</a></li>
              <li><a href="#" className="hover:text-red-500">Travel</a></li>
              <li><a href="#" className="hover:text-red-500">Products</a></li>
              <li><a href="#" className="hover:text-red-500">Lifestyle</a></li>
            </ul>
          </div>
  
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Photo Shoots</a></li>
              <li><a href="#" className="hover:text-red-500">Photo Editing</a></li>
              <li><a href="#" className="hover:text-red-500">Videography</a></li>
              <li><a href="#" className="hover:text-red-500">Drone Shots</a></li>
              <li><a href="#" className="hover:text-red-500">Printing</a></li>
            </ul>
          </div>
  
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 123 Studio Lane, City</li>
              <li>📞 +123 456 7890</li>
              <li>✉️ contact@pixelpro.com</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} PixelPro Studio. All rights reserved.
        </div>
      </footer>
    );
  }
  