'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { supabase } from '@/lib/supabase';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    notes: '',
  });
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            time: formData.time,
            party_size: parseInt(formData.partySize),
            notes: formData.notes || '',
          },
        ]);

      if (error) {
        console.error('Booking error:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setSubmittedData(formData);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          partySize: '2',
          notes: '',
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success' && submittedData) {
    return (
      <>
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          >
            <div className="absolute inset-0 bg-neutral-900/70" />
          </div>
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">Thank You!</h1>
            <p className="text-lg sm:text-xl text-neutral-200">
              Your booking request has been received
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                  Booking Confirmation
                </h2>
                <p className="text-lg text-neutral-600">
                  We've received your reservation request and will contact you shortly to confirm.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Booking Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Name</p>
                      <p className="font-medium text-neutral-900">{submittedData.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Email</p>
                      <p className="font-medium text-neutral-900">{submittedData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Phone</p>
                      <p className="font-medium text-neutral-900">{submittedData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Date</p>
                      <p className="font-medium text-neutral-900">
                        {new Date(submittedData.date).toLocaleDateString('en-GB', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Time</p>
                      <p className="font-medium text-neutral-900">{submittedData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-600">Party Size</p>
                      <p className="font-medium text-neutral-900">
                        {submittedData.partySize} {submittedData.partySize === '1' ? 'Person' : 'People'}
                      </p>
                    </div>
                  </div>
                  {submittedData.notes && (
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-neutral-600">Special Requests</p>
                        <p className="font-medium text-neutral-900">{submittedData.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-amber-900 mb-2">What Happens Next?</h3>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>We'll review your booking request within the next few hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>You'll receive a confirmation email at {submittedData.email}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>We may call you on {submittedData.phone} to confirm details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>If you need to make changes, please contact us directly</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  href="/"
                  className="flex-1"
                >
                  Return to Homepage
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setSubmittedData(null);
                  }}
                  className="flex-1"
                >
                  Make Another Booking
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <Phone className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Questions?</h3>
                <p className="text-sm text-neutral-600 mb-2">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:07759044103"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  07759 044103
                </a>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-lg">
                <Mail className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Email Us</h3>
                <p className="text-sm text-neutral-600 mb-2">
                  For general enquiries
                </p>
                <a
                  href="mailto:info@theredbulleccles.com"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  info@theredbulleccles.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">Book a Table</h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Reserve your table and join us for an unforgettable dining experience
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-900 mb-2">Demo Booking Form</h2>
            <p className="text-amber-800">
              This is a demonstration booking form to show how your online reservations could work.
              Submissions will be sent to your email for review.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <User className="h-4 w-4" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="07759 044103"
                />
              </div>

              <div>
                <label htmlFor="partySize" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <Users className="h-4 w-4" />
                  Party Size
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <Calendar className="h-4 w-4" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="time" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  <Clock className="h-4 w-4" />
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="notes" className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                <MessageSquare className="h-4 w-4" />
                Special Requests
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                placeholder="Please let us know if you have any allergies, require a highchair, or have any other special requests..."
              />
            </div>

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  Sorry, there was an error submitting your booking. Please call us at 07759 044103.
                </p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Request Booking'}
            </Button>

            <p className="text-sm text-neutral-600 text-center mt-4">
              For immediate bookings or parties larger than 10, please call us at{' '}
              <a href="tel:07759044103" className="text-amber-600 hover:text-amber-700 font-medium">
                07759 044103
              </a>
            </p>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Clock className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Opening Hours</h3>
              <p className="text-sm text-neutral-600">
                Monday - Thursday: 12:00 - 23:00<br />
                Friday - Saturday: 12:00 - 00:00<br />
                Sunday: 12:00 - 22:00
              </p>
            </div>

            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Phone className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Call Us</h3>
              <p className="text-sm text-neutral-600 mb-2">
                For immediate bookings
              </p>
              <a
                href="tel:07759044103"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                07759 044103
              </a>
            </div>

            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Mail className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Email Us</h3>
              <p className="text-sm text-neutral-600 mb-2">
                General enquiries
              </p>
              <a
                href="mailto:info@theredbulleccles.com"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                info@theredbulleccles.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
