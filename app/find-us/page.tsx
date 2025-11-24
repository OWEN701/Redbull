
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { OpeningHours } from '@/components/ui/OpeningHours';
import { MapPin, Phone, Mail, Car, Train } from 'lucide-react';

export default function FindUsPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">Find Us</h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Located in the heart of Eccles, Kent
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
              Visit The Red Bull
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                  <p className="text-neutral-600">
                    Mackenders Lane, Eccles
                    <br />
                    ME20 7HX, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                  <a
                    href="tel:07759044103"
                    className="text-neutral-600 hover:text-red-800 transition-colors"
                  >
                    07759 044103
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@theredbulleccles.com"
                    className="text-neutral-600 hover:text-red-800 transition-colors"
                  >
                    info@theredbulleccles.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-neutral-900 mb-4">Getting Here</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900 text-sm">By Car</h4>
                    <p className="text-sm text-neutral-600">
                      We're just off the M20, easily accessible from Maidstone and surrounding
                      areas. Free parking available on-site.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Train className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900 text-sm">By Train</h4>
                    <p className="text-sm text-neutral-600">
                      Nearest station: Aylesford (2 miles). Local taxi services available from
                      the station.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              href="https://www.google.com/maps/place/Mackenders+Lane,+Eccles,+ME20+7HX"
              external
              className="w-full sm:w-auto"
            >
              Get Directions
            </Button>
          </div>

          <div>
            <OpeningHours />

            <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-red-800 mr-2">•</span>
                  <span>Smart casual dress code appreciated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-2">•</span>
                  <span>Children welcome until 8pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-2">•</span>
                  <span>Dogs welcome in garden and bar areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-2">•</span>
                  <span>Bookings recommended, especially weekends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
            Nearby Attractions
          </h2>
          <p className="text-center text-neutral-600 mb-12">
            The Red Bull is ideally located for exploring Kent's historic sites
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">Aylesford Priory</h3>
              <p className="text-sm text-neutral-600">Historic medieval priory - 2 miles away</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">Leeds Castle</h3>
              <p className="text-sm text-neutral-600">Stunning castle and gardens - 6 miles away</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">The Pilgrims Way</h3>
              <p className="text-sm text-neutral-600">
                Historic walking route - on our doorstep
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Ready to Visit?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Book your table today and experience exceptional food in a beautiful historic setting
          </p>
          <Button
            variant="primary"
            href="https://book.mysimpleerb.com/?id=TheRedBull"
            external
          >
            Book a Table
          </Button>
        </div>
      </Section>
    </>
  );
}
