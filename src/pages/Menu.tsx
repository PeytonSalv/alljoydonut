import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import '@fontsource/pacifico';

const donutData = [
  { id: 1, name: 'Apple Pie Donut', image: '/donuts/apple.png' },
  { id: 2, name: 'Frosted Donut', image: '/donuts/frosted.png' },
  { id: 3, name: 'Reeses Topped Donut', image: '/donuts/reesestopped.png' },
  { id: 4, name: 'Lemon Poppyseed Donut', image: '/donuts/lemonpoppy.png' },
  { id: 5, name: 'Donut Hole', image: '/donuts/donutholesmenu.png' },
  { id: 6, name: 'Maple Bacon Donut', image: '/donuts/baconmaplemenu.png' },
  { id: 7, name: 'Cake Donut', image: '/donuts/cakemenu.png' },
  { id: 8, name: 'Pecan Donut', image: '/donuts/pecanmenu.png' },
  { id: 9, name: 'Strawberry Jam Donut', image: '/donuts/stjammenu.png' },
  { id: 10, name: 'Lemon & Marquine Pie Donut', image: '/donuts/lemonmenu.png' },
  { id: 11, name: 'Oreo Donut', image: '/donuts/oreomenu.png' },
  { id: 12, name: 'Original Glazed', image: '/donuts/glazemenu.png' },
  { id: 13, name: 'Apple Fritters', image: '/donuts/afrittersmenu.png' },
  { id: 14, name: 'Unicorn Donut', image: '/donuts/sjammenu.png' },
  { id: 15, name: 'Dog Treat', image: '/donuts/dtreatmenu.png' }
];

const Menu: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cream bg-donut-pattern">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <h1 className="text-5xl text-center text-orange-500 font-pacifico drop-shadow mb-3">Our Donuts</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Handcrafted fresh every day with local love & quality ingredients
        </p>

        {/* Donut Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {donutData.map((donut) => (
            <div
              key={donut.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl ring-1 ring-orange-100 overflow-hidden transition duration-300 hover:scale-[1.015]"
            >
              <div className="aspect-square bg-orange-50 p-5 flex items-center justify-center">
                <img
                  src={donut.image}
                  alt={donut.name}
                  className="h-full w-full object-contain drop-shadow-md transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center border-t border-orange-100">
                <h3 className="text-lg font-semibold text-gray-800">{donut.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-pacifico text-orange-500 text-center mb-10">Our Drinks</h2>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 lg:p-14 grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-orange-50 to-white">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/donuts/lotus-energy.png"
                alt="Lotus Energy"
                className="w-72 sm:w-80 rounded-xl shadow-md transition duration-300 hover:scale-105"
              />
            </div>

            {/* Drinks Info */}
            <div className="space-y-6">
              {[
                {
                  title: 'Specialty Drinks',
                  desc: 'Choose from 30+ flavored syrups to create your perfect drink. Add boba for a little extra fun!'
                },
                {
                  title: 'Coffee',
                  desc: 'Our smooth 16oz house coffee, served hot or iced. Perfectly roasted and ready to go.'
                },
                {
                  title: 'Other Beverages',
                  desc: 'Orange • Apple • Milk • Soda • Bottled Water',
                }
              ].map((drink, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">{drink.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{drink.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
