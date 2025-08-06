import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const NavLink = ({ href, label }) => (
    <Link href={href}>
      <span className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        router.pathname === href
          ? 'text-white bg-primary'
          : 'text-gray-700 hover:bg-gray-200 hover:text-primary'
      }`}>
        {label}
      </span>
    </Link>
  );

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex items-center space-x-2 cursor-pointer">
                <Scale className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-primary">Gauri CA Consultancy</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => <NavLink key={link.href} {...link} />)}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
               <Link href={link.href} key={link.href}>
                <span className={`block px-3 py-2 rounded-md text-base font-medium ${
                    router.pathname === link.href
                    ? 'text-white bg-primary'
                    : 'text-gray-700 hover:bg-gray-200 hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}