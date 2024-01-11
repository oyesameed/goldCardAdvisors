// Header component

// Libs
import Link from "next/link";
import { useState } from "react";

// Component
export default function Header() {
  
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="font-sans relative border-b">

      <div className="mx-auto px-4 md:px-8 lg:px-12">

        <div className="flex h-20 items-center justify-between">

          <div className="flex gap-12 text-dark-2">

            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block" href="/">
                <span className="sr-only">Home</span>
                <img src="/logo.svg" className="h-7 w-auto" />
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">

              <div className="hidden md:flex md:gap-2">
                <Link className="px-3 py-2.5 text-xs hover:underline" href="/">Explore</Link>
                <Link className="px-3 py-2.5 text-xs hover:underline" href="/">Toplists</Link>
                <Link className="px-3 py-2.5 text-xs hover:underline" href="/">Collection</Link>
                <Link className="px-3 py-2.5 text-xs hover:underline" href="/">Portfolio</Link>
                <Link className="px-3 py-2.5 text-xs hover:underline" href="/">Watchlist</Link>
              </div>
            </div>

          </div>

          <div className="">
            
            <div className="gap-2 hidden md:flex">

              {/* Notification */}
              <div className="border-2 h-10 w-10 rounded-full flex item-center p-2.5">
                <img src="/images/notification.svg" className="w-auto" />
              </div>

              {/* User */}
              <img src="/images/avatar.png" className="h-10 border-2 w-auto rounded-full" />
              
            </div>

            {/* Mobile menu button */}
            <div className="block md:hidden">
                <button className="rounded p-2 transition hover:text-gray-600/75" onClick={toggleMobileMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 bg-light-1 right-0 h-full w-80 bg-light border-l z-50 overflow-hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button className="rounded p-2 transition hover:text-gray-600/75" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* All link */}
          <div className="p-4">

            <Link className="block px-5 py-2.5 text-sm" href="/">Explore</Link>
            <Link className="block px-5 py-2.5 text-sm" href="/">Toplists</Link>
            <Link className="block px-5 py-2.5 text-sm" href="/">Collection</Link>
            <Link className="block px-5 py-2.5 text-sm" href="/">Portfolio</Link>
            <Link className="block px-5 py-2.5 text-sm" href="/">Watchlist</Link>
            
          </div>
        </div>

      </div>
    </div>
  );
}
