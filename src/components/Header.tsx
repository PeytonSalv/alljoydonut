import React, { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavItem = { name: string; path: string; external?: boolean };

const nav: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Bike Rentals', path: 'https://alljoybike.com', external: true },
  { name: 'AirBnB', path: '/airbnb' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showBikePopup, setShowBikePopup] = useState(true);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setShowBikePopup(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('keydown', handleKey); };
  }, []);

  const Hours = (
    <span className="rounded-lg bg-orange-100 px-4 py-2 text-xs font-bold text-orange-800 whitespace-nowrap">
      Fri – Sun 7 AM – 1 PM
    </span>
  );

  const Item: React.FC<NavItem> = ({ name, path, external }) => {
    const active = pathname === path;
    const base = 'w-full rounded-lg py-3 text-center font-semibold transition';
    const style = active ? 'bg-orange-100 text-orange-600' : 'text-gray-800 hover:bg-orange-50';
    const content = <span className={`${base} ${style}`}>{name}</span>;

    return external ? (
      <a href={path} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
        {content}
      </a>
    ) : (
      <button onClick={() => { navigate(path); setOpen(false); }}>
        {content}
      </button>
    );
  };

  const closeOnBg = () => setOpen(false);
  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      {/* Bike Rental Popup */}
      {showBikePopup && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm w-full sm:w-80 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden animate-fade-in-up">
          <div className="relative p-4">
            <button 
              onClick={() => setShowBikePopup(false)} 
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close announcement"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <a 
              href="https://alljoybike.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <div className="flex items-center">
                <img src="/bikelogo.png" alt="Alljoy Bike & Beach Rentals" className="h-16 w-auto mr-4" />
                <div>
                  <h3 className="font-bold text-orange-500 mb-1 group-hover:text-orange-600 transition">
                    Now Open!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Alljoy Bike & Beach Rentals is ready for your adventure
                  </p>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <span className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition">
                  Book Your Rental Now
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-24 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Alljoy Donut Co." className="h-20 lg:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map(item => <Item key={item.name} {...item} />)}
            {Hours}
          </nav>

          {/* Mobile toggle + hours */}
          <div className="flex items-center lg:hidden gap-3">
            {Hours}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="p-3 lg:p-2 rounded-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 lg:h-6 lg:w-6 text-gray-800">
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Menu, positioned below header */}
      <div
        className={
          `fixed left-0 top-24 bottom-0 z-40 w-64 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ` +
          (open ? 'translate-x-0' : '-translate-x-full')
        }
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        role="dialog"
        aria-modal="true"
        onClick={closeOnBg}
      >
        <div className="flex flex-col h-full p-6 space-y-4 overflow-y-auto" onClick={stop}>
          {nav.map(item => <Item key={item.name} {...item} />)}
        </div>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          {Hours}
        </div>
      </div>
    </>
  );
};

export default Header;
