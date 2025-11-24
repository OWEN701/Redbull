
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Wine, Users, Clock, Gift } from 'lucide-react';

export default function ExperiencesPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Experiences & Events
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Create unforgettable memories with our unique experiences
          </p>
        </div>
      </section>

      <Section id="cocktail-masterclass">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="h-96 rounded-xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
            <div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                Cocktail Masterclass
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Learn the art of mixology with our expert bartenders in an interactive and
                entertaining cocktail masterclass. Perfect for groups, celebrations, or a
                fun night out with friends.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Wine className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-neutral-900">What's Included</h4>
                    <p className="text-sm text-neutral-600">
                      Learn to make 3 classic cocktails, premium spirits, all ingredients and
                      equipment provided
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-neutral-900">Duration</h4>
                    <p className="text-sm text-neutral-600">
                      Approximately 90 minutes of hands-on experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-neutral-900">Group Size</h4>
                    <p className="text-sm text-neutral-600">
                      Minimum 8 guests, maximum 20 per session
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Gift className="h-5 w-5 text-red-800 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-neutral-900">Perfect For</h4>
                    <p className="text-sm text-neutral-600">
                      Birthday parties, hen/stag dos, team building, and celebrations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
                <p className="text-sm text-neutral-700">
                  <strong className="text-neutral-900">Price:</strong> £45 per person
                  <br />
                  <strong className="text-neutral-900">Availability:</strong> By appointment, advance
                  booking required
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="tel:07759044103">
                  Call to Book
                </Button>
                <Button variant="secondary" href="mailto:info@theredbulleccles.com">
                  Email Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">
            Seasonal Events
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/3171736/pexels-photo-3171736.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                  Christmas Events
                </h3>
                <p className="text-neutral-600 mb-4">
                  Join us for festive celebrations throughout December. From Christmas party
                  packages to special festive menus, we create magical moments during the most
                  wonderful time of the year.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Christmas party packages
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Festive menu and drinks
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Private dining options
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                  Special Date Nights
                </h3>
                <p className="text-neutral-600 mb-4">
                  Throughout the year, we host special themed evenings including Valentine's Day,
                  Mother's Day, and other celebrations with exclusive menus and romantic settings.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Exclusive tasting menus
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Wine pairings available
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Intimate atmosphere
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                  Wine Tasting Events
                </h3>
                <p className="text-neutral-600 mb-4">
                  Join our sommelier for guided wine tasting sessions featuring carefully selected
                  wines from around the world, paired with artisan cheese and charcuterie.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Expert-led tastings
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Food pairings included
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Limited availability
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">
                  Live Music Nights
                </h3>
                <p className="text-neutral-600 mb-4">
                  Enjoy live acoustic performances from local musicians while you dine. Check our
                  social media for upcoming dates and featured artists.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Local talent showcase
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Free entry
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-800 mr-2">✓</span>
                    Full menu available
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Follow us on social media to stay informed about upcoming events, special offers,
            and exclusive experiences at The Red Bull.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="https://www.facebook.com/theredbulleccles" external>
              Follow on Facebook
            </Button>
            <Button variant="secondary" href="tel:07759044103">
              Call for More Info
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
