import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'The Red Bull Eccles | Country Pub & Dining in Kent',
  description:
    'Historic 16th-century country pub in Eccles, Kent. Seasonal Kentish menus, garden globes, private dining, and cocktail masterclasses. Family and dog-friendly. Near Aylesford Priory and Leeds Castle.',
  keywords:
    'The Red Bull, Eccles pub, Kent restaurant, country pub Kent, garden dining, dining globes, private dining Kent, Kentish food, seasonal menus, Aylesford, Leeds Castle',
  openGraph: {
    title: 'The Red Bull Eccles | Country Pub & Dining in Kent',
    description:
      'Historic country pub serving seasonal Kentish cuisine. Garden globes, private dining, and unique experiences.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Red Bull Eccles',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'The Red Bull',
    image: 'https://www.theredbulleccles.com/og-image.jpg',
    '@id': 'https://www.theredbulleccles.com',
    url: 'https://www.theredbulleccles.com',
    telephone: '+447759044103',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mackenders Lane',
      addressLocality: 'Eccles',
      postalCode: 'ME20 7HX',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2943,
      longitude: 0.4655,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '12:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '12:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '22:00',
      },
    ],
    servesCuisine: 'British, Modern European',
    acceptsReservations: 'True',
    menu: 'https://www.theredbulleccles.com/menus',
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
