// src/components/ExploreDonuts.tsx
import React from 'react';

const donutData = [
  { id: 1, name: 'Apple Pie Donut', image: '/donuts/apple.png' },
  { id: 2, name: 'Frosted Donut', image: '/donuts/frosted.png' },
  { id: 3, name: 'Reeses Topped Donut', image: '/donuts/reesestopped.png' },
  { id: 4, name: 'Lemon Poppyseed Donut', image: '/donuts/lemonpoppy.png' },
];

const ExploreDonuts: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Explore Donuts</h2>
        <p className="text-gray-600 mt-2">Discover our favorite flavors below</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {donutData.map((donut) => (
          <div
            key={donut.id}
            className="bg-cream rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="aspect-square bg-orange-100 flex items-center justify-center">
              <img
                src={donut.image}
                alt={donut.name}
                className="h-40 object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{donut.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreDonuts;
