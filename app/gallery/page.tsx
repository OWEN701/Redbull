'use client';

import { useState } from 'react';

import { Section } from '@/components/ui/Section';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food',
    alt: 'Delicious plated dish',
  },
  {
    url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    alt: 'Cocktails at the bar',
  },
  {
    url: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food',
    alt: 'Gourmet meal',
  },
  {
    url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food',
    alt: 'Fresh ingredients',
  },
  {
    url: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    alt: 'Wine selection',
  },
  {
    url: 'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'food',
    alt: 'Dessert plate',
  },
  {
    url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'garden',
    alt: 'Pub exterior',
  },
  {
    url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'garden',
    alt: 'Interior dining',
  },
  {
    url: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    alt: 'Special event',
  },
  {
    url: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks',
    alt: 'Craft cocktails',
  },
  {
    url: 'https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'garden',
    alt: 'Garden dining',
  },
  {
    url: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    alt: 'Table setting',
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'garden', label: 'Garden' },
    { id: 'events', label: 'Events' },
  ];

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">Gallery</h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Explore the sights and flavours of The Red Bull
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                filter === filterItem.id
                  ? 'bg-red-800 text-white shadow-md'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-red-800 hover:text-red-800'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(image.url)}
              className="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
