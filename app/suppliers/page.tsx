
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const suppliers = [
  {
    name: 'Kentish Farms',
    type: 'Meat & Poultry',
    description:
      'Family-run farm providing premium grass-fed beef, lamb, and free-range poultry. All animals are reared naturally on Kentish pastures.',
  },
  {
    name: 'Whitstable Bay Fisheries',
    type: 'Fresh Fish & Seafood',
    description:
      'Daily deliveries of the freshest catch from the Kent coast. From line-caught sea bass to locally harvested oysters.',
  },
  {
    name: 'The Village Bakery',
    type: 'Artisan Breads',
    description:
      'Traditional bakery crafting sourdough, crusty loaves, and pastries using traditional methods and locally milled flour.',
  },
  {
    name: 'Garden of England Dairy',
    type: 'Dairy Products',
    description:
      'Award-winning cheese, butter, and cream from local dairy farms. Their artisan cheeses are aged to perfection.',
  },
  {
    name: 'Heritage Vegetables',
    type: 'Seasonal Produce',
    description:
      'Organic market garden growing seasonal vegetables and salad leaves. Everything is harvested at peak freshness.',
  },
  {
    name: 'Kentish Orchards',
    type: 'Fruit & Cider',
    description:
      'Traditional apple orchards producing heritage varieties and craft cider. Their seasonal fruits feature in our desserts.',
  },
  {
    name: 'The Game Keeper',
    type: 'Wild Game',
    description:
      'Ethically sourced game from local estates including pheasant, venison, and rabbit, all prepared by expert butchers.',
  },
  {
    name: 'Medway Valley Brewery',
    type: 'Craft Beer & Ale',
    description:
      'Local microbrewery creating traditional and innovative ales. Their seasonal brews are always on tap at The Red Bull.',
  },
];

export default function SuppliersPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Local Suppliers
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Supporting Kent's finest producers and artisans
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Celebrating Kent's Best
          </h2>
          <p className="text-lg text-neutral-700">
            We're passionate about showcasing the incredible produce that Kent has to offer.
            By working closely with local farmers, fishermen, and artisan producers, we ensure
            that every dish celebrates the finest seasonal ingredients while supporting our
            local community and reducing our environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <Card key={supplier.name} className="p-6">
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-red-800/10 text-red-800 text-xs font-medium rounded-full mb-3">
                  {supplier.type}
                </div>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                  {supplier.name}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{supplier.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-red-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Farm to Fork Philosophy</h2>
          <p className="text-lg text-red-100 mb-8">
            Our commitment to local sourcing means shorter supply chains, fresher ingredients,
            and dishes that truly reflect the seasons. We believe in transparency, quality, and
            building lasting relationships with the people who grow and produce our food.
          </p>
          <p className="text-red-100">
            Menus change regularly to showcase the best of what's available, ensuring you always
            experience Kent's produce at its peak.
          </p>
        </div>
      </Section>
    </>
  );
}
