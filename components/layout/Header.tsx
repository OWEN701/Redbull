'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Menus' },
    { href: '/garden-and-globes', label: 'Garden & Globes' },
    { href: '/private-dining', label: 'Private Dining' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/find-us', label: 'Find Us' },
    { href: '/book', label: 'Book a Table' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-serif font-bold text-neutral-900">
              The Red Bull
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/book"
            >
              Book Now
            </Button>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <nav className="px-4 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-neutral-700 hover:text-neutral-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="primary"
                href="/book"
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
