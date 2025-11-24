import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Menus' },
    { href: '/garden-and-globes', label: 'Garden & Globes' },
    { href: '/private-dining', label: 'Private Dining' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/suppliers', label: 'Our Suppliers' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              The Red Bull
            </h3>
            <p className="text-sm text-neutral-400">
              Historic country pub serving seasonal Kentish dishes in the heart of Kent.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <address className="not-italic text-sm text-neutral-400 space-y-2">
              <p>Mackenders Lane, Eccles</p>
              <p>ME20 7HX, United Kingdom</p>
              <p>
                <a
                  href="tel:07759044103"
                  className="hover:text-white transition-colors"
                >
                  07759 044103
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@theredbulleccles.com"
                  className="hover:text-white transition-colors"
                >
                  info@theredbulleccles.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/theredbulleccles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5 mr-2" />
                Follow us on Facebook
              </a>
              <a
                href="https://theredbull.vouchercart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Gift Vouchers
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 text-center">
            &copy; {new Date().getFullYear()} The Red Bull, Eccles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
