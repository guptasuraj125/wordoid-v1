'use client';
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-indigo-600">Brand</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">About</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Services</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Portfolio</a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleLike}
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
                <span>{likeCount}</span>
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200">
                Sign Up
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={handleLike}
                className="flex items-center gap-1 mr-4 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
                <span className="text-sm">{likeCount}</span>
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md font-medium">Portfolio</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md font-medium">Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-5">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Website</h1>
            <p className="text-lg text-gray-600 mb-12">Scroll down to see the navbar change background, and try the like button functionality!</p>
            
            <div className="space-y-64">
              <div className="bg-indigo-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Section 1</h2>
                <p className="text-gray-700">This content is here to demonstrate the scrolling effect on the navbar.</p>
              </div>
              
              <div className="bg-indigo-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Section 2</h2>
                <p className="text-gray-700">As you scroll, notice how the navbar changes from transparent to white with a shadow.</p>
              </div>
              
              <div className="bg-indigo-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Section 3</h2>
                <p className="text-gray-700">The navbar is also fully responsive. Try resizing your browser window!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}