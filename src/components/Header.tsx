import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Bike Rentals', path: 'https://alljoybike.com/bluffton-rentals/', external: true },
  { name: 'AirBnB', path: '/airbnb' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Alljoy Logo"
                className="h-14 w-auto hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(({ name, path, external }) => {
                const isActive = location.pathname === path;
                return external ? (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-orange-500"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => navigate(path)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-orange-500 underline underline-offset-4'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>

            {/* Hours */}
            <div className="hidden md:block px-4 py-2 bg-orange-100 rounded-lg text-sm font-medium text-orange-800">
              Fri-Sun 7 AM - 1 PM
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-orange-100">
              {navItems.map(({ name, path, external }) => {
                const isActive = location.pathname === path;
                return external ? (
                  <a
                    key={name}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => {
                      navigate(path);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
              <div className="px-3 py-2 text-base font-medium text-orange-800">
                Fri-Sun 7 AM - 1 PM
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
