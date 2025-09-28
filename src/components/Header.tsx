import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-red-600">Pixel</span>
                <span className="text-green-600">Pro</span>
                <span className="text-gray-700">Agency</span>
            </div>
          </Link>
  
          {/* Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link href="#" className="hover:text-red-600 transition-colors">About</Link>
            <Link href="Service" className="hover:text-red-600 transition-colors">Service</Link>
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
  