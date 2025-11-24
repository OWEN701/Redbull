import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { OpeningHours } from '@/components/ui/OpeningHours';
import { Utensils, Sparkles, Users, Camera, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <MenusPreviewSection />
      <ExperiencesSection />
      <GalleryPreviewSection />
      <OpeningTimesSection />
      <CTAStrip />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/70 to-neutral-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            A Historic Country Pub in the Heart of Kent
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 mb-8 leading-relaxed">
            A beautifully refurbished 16th-century pub near the Pilgrims Way, serving seasonal Kentish cuisine.
            Family and dog-friendly with stunning garden globes and terrace dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              href="/book"
            >
              Book a Table
            </Button>
            <Button variant="secondary" href="/menus">
              View Menus
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-neutral-700">
            <span>Family & dog friendly</span>
            <span className="hidden sm:inline">·</span>
            <span>Seasonal Kentish produce</span>
            <span className="hidden sm:inline">·</span>
            <span>Garden globes & terrace dining</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      icon: Utensils,
      title: 'Seasonal Kentish Menus',
      description:
        'Modern pub classics reimagined with locally sourced meats, fresh fish, and creative vegan and vegetarian options.',
      link: '/menus',
    },
    {
      icon: Sparkles,
      title: 'Garden & Dining Globes',
      description:
        'Cosy, all-weather outdoor dining in our stunning garden globes. Perfect for intimate meals and special occasions.',
      link: '/garden-and-globes',
    },
    {
      icon: Users,
      title: 'Cocktail Masterclass',
      description:
        'Join our fun, hosted cocktail experiences. Learn to craft classic and creative cocktails with our expert mixologists.',
      link: '/experiences#cocktail-masterclass',
    },
    {
      icon: Camera,
      title: 'Private Dining & Functions',
      description:
        'Host your business meetings, celebrations, or special occasions in our elegant private dining spaces.',
      link: '/private-dining',
    },
  ];

  return (
    <Section className="bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item) => (
          <Card key={item.title} className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                <item.icon className="h-6 w-6 text-red-800" />
              </div>
            </div>
            <h3 className="text-lg font-serif font-bold text-neutral-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-4">{item.description}</p>
            <Link
              href={item.link}
              className="text-sm font-medium text-red-800 hover:text-red-900 transition-colors"
            >
              Learn more →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-6">
            Welcome to The Red Bull
          </h2>
          <div className="prose prose-lg text-neutral-700 space-y-4">
            <p>
              Nestled in the picturesque village of Eccles, The Red Bull is a beautifully
              refurbished 16th-century country pub offering a warm welcome to all. Located
              near the historic Pilgrims Way, just minutes from Aylesford Priory and Leeds Castle,
              we're the perfect destination for locals and visitors alike.
            </p>
            <p>
              Our terrace and landscaped garden provide the ideal setting for al fresco dining,
              while our unique dining globes offer cosy, all-weather outdoor experiences. We're
              passionate about showcasing the best of Kent, working closely with local farmers,
              fishmongers, and artisan producers to bring you the finest seasonal ingredients.
            </p>
            <p>
              Whether you're joining us for a casual lunch, a special dinner, or a celebration
              with friends and family, we pride ourselves on delivering exceptional food, drink,
              and service in a relaxed and welcoming atmosphere.
            </p>
            <Link
              href="/suppliers"
              className="inline-block text-red-800 font-medium hover:text-red-900 transition-colors"
            >
              Meet our local suppliers →
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
        </div>
      </div>
    </Section>
  );
}

function MenusPreviewSection() {
  return (
    <Section className="bg-red-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
          Seasonal Menus
        </h2>
        <p className="text-lg mb-8 text-red-100">
          Discover our ever-changing menu featuring modern and reinvented pub classics.
          From locally sourced meats and game to fresh fish and inspired vegan dishes,
          every plate celebrates the finest seasonal produce Kent has to offer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" href="/menus">
            View Menus
          </Button>
          <Button
            variant="secondary"
            href="https://pay.yoello.com/v/THEREDBULLPIZZA"
            external
          >
            Pizza Takeaway
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ExperiencesSection() {
  const experiences = [
    {
      title: 'Garden Globes',
      description:
        'Dine under the stars in our enchanting garden globes. Perfect for romantic dinners or intimate gatherings.',
      image: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Book a Globe',
      href: '/garden-and-globes',
    },
    {
      title: 'Cocktail Masterclass',
      description:
        'Shake, stir, and sip your way through an unforgettable cocktail experience with our expert bartenders.',
      image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'View Details',
      href: '/experiences#cocktail-masterclass',
    },
    {
      title: 'Private Dining',
      description:
        'Host your next event in style. From business meetings to birthdays, we create memorable experiences.',
      image: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Plan an Event',
      href: '/private-dining',
    },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
          Experiences
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Create lasting memories with our unique dining experiences and events
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <Card key={exp.title} className="overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${exp.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-neutral-600 mb-4">{exp.description}</p>
              <Button variant="primary" href={exp.href} className="w-full">
                {exp.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function GalleryPreviewSection() {
  const galleryImages = [
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <Section className="bg-neutral-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
          Gallery
        </h2>
        <p className="text-lg text-neutral-600">
          A glimpse into The Red Bull experience
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="primary" href="/gallery">
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
}

function OpeningTimesSection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
          Visit Us
        </h2>
        <p className="text-lg text-neutral-600">
          We look forward to welcoming you
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <OpeningHours />

        <div className="bg-white rounded-xl border border-neutral-200 p-6">
          <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
            Contact & Location
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <p className="font-medium text-neutral-900">Address</p>
                <p className="text-neutral-600">
                  Mackenders Lane, Eccles
                  <br />
                  ME20 7HX, United Kingdom
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <p className="font-medium text-neutral-900">Phone</p>
                <a
                  href="tel:07759044103"
                  className="text-neutral-600 hover:text-red-800 transition-colors"
                >
                  07759 044103
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <p className="font-medium text-neutral-900">Email</p>
                <a
                  href="mailto:info@theredbulleccles.com"
                  className="text-neutral-600 hover:text-red-800 transition-colors"
                >
                  info@theredbulleccles.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <div className="bg-neutral-50 rounded-lg p-4 text-sm text-neutral-600">
                <p className="font-medium text-neutral-900 mb-2">Please note:</p>
                <p>Smart casual dress code appreciated. Children welcome until 8pm.</p>
              </div>
            </div>

            <Button
              variant="primary"
              href="https://www.google.com/maps/place/Mackenders+Lane,+Eccles,+ME20+7HX"
              external
              className="w-full"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTAStrip() {
  return (
    <Section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
          Ready to book your next visit?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            href="/book"
          >
            Book a Table
          </Button>
          <Button variant="secondary" href="/garden-and-globes">
            Book a Globe
          </Button>
        </div>
      </div>
    </Section>
  );
}
