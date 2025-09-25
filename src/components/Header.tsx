export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-red-600">Pixel</span>
            <span className="text-green-600">Pro</span>
            <span className="text-gray-700">Agency</span>
          </div>
  
          {/* Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#" className="hover:text-red-600 transition-colors">About</a>
            <a href="#" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#" className="hover:text-red-600 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
          </nav>
  
          {/* Mobile Menu Icon (optional, placeholder for now) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </header>
    );
  }
  