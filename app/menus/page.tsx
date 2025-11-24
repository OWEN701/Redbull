'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export default function MenusPage() {
  const [activeMenu, setActiveMenu] = useState('lunch');

  const menus = [
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'sunday', label: 'Sunday Roast' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
  ];

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our Menus
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200">
            Seasonal dishes crafted with the finest local ingredients
          </p>
        </div>
      </section>

      <Section>
        <div className="flex justify-center mb-12">
          <Button
            variant="primary"
            href="https://book.mysimpleerb.com/?id=TheRedBull"
            external
          >
            Book a Table
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeMenu === menu.id
                  ? 'bg-red-800 text-white shadow-md'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-red-800 hover:text-red-800'
              }`}
            >
              {menu.label}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeMenu === 'lunch' && <LunchMenu />}
          {activeMenu === 'dinner' && <DinnerMenu />}
          {activeMenu === 'sunday' && <SundayMenu />}
          {activeMenu === 'drinks' && <DrinksMenu />}
          {activeMenu === 'desserts' && <DessertsMenu />}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            variant="primary"
            href="https://book.mysimpleerb.com/?id=TheRedBull"
            external
          >
            Book a Table
          </Button>
          <Button
            variant="secondary"
            href="https://pay.yoello.com/v/THEREDBULLPIZZA"
            external
          >
            Pizza Takeaway
          </Button>
        </div>
      </Section>
    </>
  );
}

function MenuSection({ title, items }: { title: string; items: Array<{ name: string; description: string; price: string }> }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6 border-b-2 border-red-800 pb-2">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-neutral-900 mb-1">{item.name}</h4>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
            <span className="font-medium text-red-800 ml-4">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LunchMenu() {
  return (
    <div>
      <MenuSection
        title="Starters"
        items={[
          {
            name: 'Soup of the Day',
            description: 'Freshly made seasonal soup served with crusty bread',
            price: '£6.50',
          },
          {
            name: 'Kentish Ham Hock Terrine',
            description: 'Piccalilli, toasted sourdough, mixed leaves',
            price: '£8.00',
          },
          {
            name: 'Seasonal Salad',
            description: 'Garden leaves, heritage tomatoes, local cheese, balsamic dressing',
            price: '£7.50',
          },
        ]}
      />
      <MenuSection
        title="Mains"
        items={[
          {
            name: 'Red Bull Burger',
            description: 'Kent beef patty, smoked bacon, mature cheddar, house sauce, fries',
            price: '£15.00',
          },
          {
            name: 'Beer Battered Fish & Chips',
            description: 'Fresh local fish, mushy peas, tartare sauce, lemon',
            price: '£14.50',
          },
          {
            name: 'Wild Mushroom Risotto',
            description: 'Arborio rice, seasonal mushrooms, truffle oil, parmesan',
            price: '£13.50',
          },
          {
            name: 'Chicken & Ham Pie',
            description: 'Free-range chicken, shortcrust pastry, seasonal vegetables, gravy',
            price: '£14.00',
          },
        ]}
      />
    </div>
  );
}

function DinnerMenu() {
  return (
    <div>
      <MenuSection
        title="Starters"
        items={[
          {
            name: 'Seared Scallops',
            description: 'Pea purée, pancetta crisps, lemon oil',
            price: '£12.00',
          },
          {
            name: 'Duck Liver Pâté',
            description: 'Red onion marmalade, toasted brioche, dressed leaves',
            price: '£9.50',
          },
          {
            name: 'Burrata',
            description: 'Heritage tomatoes, basil pesto, aged balsamic, olive oil',
            price: '£10.00',
          },
        ]}
      />
      <MenuSection
        title="Mains"
        items={[
          {
            name: '28-Day Aged Ribeye Steak',
            description: 'Triple cooked chips, roasted tomato, peppercorn sauce',
            price: '£28.00',
          },
          {
            name: 'Pan-Roasted Sea Bass',
            description: 'Saffron potatoes, samphire, shellfish velouté',
            price: '£22.00',
          },
          {
            name: 'Slow-Cooked Lamb Shoulder',
            description: 'Dauphinoise potatoes, seasonal greens, rosemary jus',
            price: '£24.00',
          },
          {
            name: 'Butternut Squash Wellington',
            description: 'Puff pastry, chestnuts, sage, red wine reduction',
            price: '£18.00',
          },
        ]}
      />
    </div>
  );
}

function SundayMenu() {
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-lg text-neutral-700">
          All served with roast potatoes, Yorkshire pudding, seasonal vegetables, and rich gravy
        </p>
      </div>
      <MenuSection
        title="Sunday Roasts"
        items={[
          {
            name: 'Roast Beef',
            description: '28-day aged British beef, horseradish sauce',
            price: '£18.00',
          },
          {
            name: 'Roast Lamb',
            description: 'Kentish lamb, mint sauce',
            price: '£19.00',
          },
          {
            name: 'Roast Chicken',
            description: 'Free-range chicken, sage & onion stuffing',
            price: '£17.00',
          },
          {
            name: 'Nut Roast',
            description: 'Mixed nuts, seasonal vegetables, vegetarian gravy',
            price: '£16.00',
          },
        ]}
      />
    </div>
  );
}

function DrinksMenu() {
  return (
    <div>
      <MenuSection
        title="Wines by the Glass"
        items={[
          { name: 'House White', description: 'Crisp and refreshing', price: '£6.50' },
          { name: 'House Red', description: 'Smooth and fruity', price: '£6.50' },
          { name: 'Prosecco', description: 'Italian sparkling', price: '£7.50' },
        ]}
      />
      <MenuSection
        title="Beers & Ciders"
        items={[
          { name: 'Local Ale', description: 'Rotating selection from Kent breweries', price: '£5.50' },
          { name: 'Kentish Cider', description: 'Locally produced craft cider', price: '£5.00' },
          { name: 'Lager', description: 'Premium international lager', price: '£5.00' },
        ]}
      />
      <MenuSection
        title="Cocktails"
        items={[
          { name: 'Red Bull Martini', description: 'Gin, vermouth, orange bitters', price: '£10.00' },
          { name: 'Kentish Bramble', description: 'Gin, blackberry, lemon, sugar', price: '£9.50' },
          { name: 'Espresso Martini', description: 'Vodka, coffee liqueur, espresso', price: '£10.00' },
        ]}
      />
    </div>
  );
}

function DessertsMenu() {
  return (
    <div>
      <MenuSection
        title="Sweet Treats"
        items={[
          {
            name: 'Sticky Toffee Pudding',
            description: 'Butterscotch sauce, vanilla ice cream',
            price: '£7.00',
          },
          {
            name: 'Chocolate Fondant',
            description: 'Molten center, berry compote, clotted cream',
            price: '£7.50',
          },
          {
            name: 'Lemon Posset',
            description: 'Shortbread biscuit, seasonal berries',
            price: '£6.50',
          },
          {
            name: 'Kentish Cheese Board',
            description: 'Selection of local cheeses, chutney, crackers',
            price: '£9.00',
          },
        ]}
      />
    </div>
  );
}
