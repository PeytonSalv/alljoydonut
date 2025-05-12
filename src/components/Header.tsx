import React, { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavItem = { name: string; path: string; external?: boolean };

const nav: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Bike Rentals', path: 'https://alljoybike.com/bluffton-rentals/', external: true },
  { name: 'AirBnB', path: '/airbnb' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
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
