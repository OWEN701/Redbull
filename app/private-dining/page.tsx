'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Users, Briefcase, PartyPopper, Calendar } from 'lucide-react';

export default function PrivateDiningPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    alert('Thank you for your enquiry! We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Private Dining & Functions
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Create unforgettable moments in our elegant private spaces
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Your Event, Your Way
          </h2>
          <p className="text-lg text-neutral-700">
            Whether you're planning a business meeting, celebrating a milestone birthday,
            hosting an intimate wedding reception, or organizing a special family gathering,
            The Red Bull offers the perfect setting for your private event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-red-800" />
              </div>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Business Meetings</h3>
            <p className="text-sm text-neutral-600">
              Professional spaces for corporate events and team gatherings
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                <PartyPopper className="h-6 w-6 text-red-800" />
              </div>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Celebrations</h3>
            <p className="text-sm text-neutral-600">
              Birthdays, anniversaries, and special milestones
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-red-800" />
              </div>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Family Gatherings</h3>
            <p className="text-sm text-neutral-600">
              Intimate dinners and family celebrations
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-red-800/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-red-800" />
              </div>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Seasonal Events</h3>
            <p className="text-sm text-neutral-600">
              Christmas parties and festive celebrations
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">
            Private Dining Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
                Private Dining Room
              </h3>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Capacity: Up to 30 guests
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Exclusive use with private bar
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  AV equipment available
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Customizable menu options
                </li>
              </ul>
              <p className="text-sm text-neutral-600">
                Perfect for business meetings, birthday parties, and intimate celebrations
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4">
                Full Venue Hire
              </h3>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Capacity: Up to 80 guests
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Exclusive use of entire venue
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Indoor and outdoor spaces
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 mr-3">✓</span>
                  Bespoke event planning
                </li>
              </ul>
              <p className="text-sm text-neutral-600">
                Ideal for weddings, large celebrations, and corporate events
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
            Enquiry Form
          </h2>
          <p className="text-center text-neutral-600 mb-8">
            Tell us about your event and we'll be in touch to discuss how we can make it special
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-neutral-900 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-neutral-900 mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                id="guests"
                required
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                Tell us about your event *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent resize-none"
                placeholder="Please include details about the type of event, any special requirements, and any questions you may have..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Enquiry
            </Button>
          </form>

          <div className="mt-8 p-6 bg-neutral-50 rounded-xl text-center">
            <p className="text-sm text-neutral-600 mb-2">
              Prefer to speak with us directly?
            </p>
            <p className="text-neutral-900">
              Call us on{' '}
              <a href="tel:07759044103" className="text-red-800 font-medium hover:text-red-900">
                07759 044103
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
