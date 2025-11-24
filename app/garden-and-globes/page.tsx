
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Users, Clock, Calendar, Phone } from 'lucide-react';

export default function GardenGlobesPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Garden & Dining Globes
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Experience magical outdoor dining in our stunning landscaped garden
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Our Beautiful Garden
          </h2>
          <div className="prose prose-lg text-neutral-700 space-y-4 mb-12">
            <p>
              Step into our beautifully landscaped garden and discover a tranquil oasis perfect
              for al fresco dining. Our spacious terrace and garden areas provide the ideal
              setting for enjoying seasonal dishes in the fresh Kentish air.
            </p>
            <p>
              Whether you're joining us for a relaxed lunch with friends, a romantic dinner,
              or a family celebration, our garden offers a peaceful retreat with stunning views
              and a welcoming atmosphere. We're proud to be dog-friendly, so your four-legged
              companions can join you too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className="h-80 rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
            <div
              className="h-80 rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
            Dining Globes
          </h2>
          <p className="text-lg text-neutral-700 text-center mb-12 max-w-2xl mx-auto">
            Our unique dining globes offer an intimate, all-weather outdoor dining experience.
            Perfect for special occasions, romantic dinners, or celebrations with close friends
            and family.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-red-800" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Capacity</h3>
              <p className="text-sm text-neutral-600">Up to 6 guests per globe</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-red-800" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Duration</h3>
              <p className="text-sm text-neutral-600">2-hour dining slots</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-red-800" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Booking</h3>
              <p className="text-sm text-neutral-600">Advanced booking required</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-red-800" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Contact</h3>
              <p className="text-sm text-neutral-600">Call to reserve</p>
            </Card>
          </div>

          <div className="bg-white rounded-xl border border-neutral-200 p-8 mb-8">
            <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
              What's Included
            </h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start">
                <span className="text-red-800 mr-3">✓</span>
                Private, cosy dining space with heating
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-3">✓</span>
                All-weather protection with stunning garden views
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-3">✓</span>
                Full menu and drinks service
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-3">✓</span>
                Perfect for special occasions and celebrations
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-3">✓</span>
                Fairy lights and ambient atmosphere
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-100 p-6 mb-8">
            <h4 className="font-semibold text-neutral-900 mb-2">Booking Information</h4>
            <p className="text-sm text-neutral-700 mb-4">
              Garden globes are subject to availability and require advance booking. A deposit
              may be required for certain dates and times. Minimum spend applies during peak
              periods.
            </p>
            <p className="text-sm text-neutral-700">
              Please call us on{' '}
              <a href="tel:07759044103" className="text-red-800 font-medium hover:text-red-900">
                07759 044103
              </a>{' '}
              to check availability and make your reservation.
            </p>
          </div>

          <div className="text-center">
            <Button variant="primary" href="tel:07759044103">
              Call to Book a Globe
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
