import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Title */}
        <h1 className="text-5xl text-center text-orange-500 font-pacifico mb-4 drop-shadow-sm">
          Our Story
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          From icy winters to warm community — meet the family behind Alljoy Donut Co.
        </p>

        {/* First Section: Founders */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img 
              src="/team.png"
              alt="Troy and Kristie Derda"
              className="rounded-2xl shadow-xl object-cover object-center w-full h-[400px] md:h-[450px]"
            />
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to Alljoy Donut Shop in Bluffton, South Carolina! We're Troy and Kristie Derda —
              parents, entrepreneurs, and adventurers who swapped the icy Midwest winters for a temperate
              life in the Lowcountry.
            </p>
            <p>
              Intrigued by this friendly community, we took a leap of faith, purchasing Alljoy from its
              retiring owners, Bill and Donna. Inheriting time-honored recipes and a dedicated team, we're
              committed to retaining the shop’s charm while adding our unique touch.
            </p>
            <p>
              Kristie's best friend of 40 years, Peggy Faber, is our dedicated shop manager and enjoys life in
              Bluffton with her husband, Jerry.
            </p>
          </div>
        </div>

        {/* Second Section: Community */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img 
              src="/shop.jpg"
              alt="Inside Alljoy Donut Shop"
              className="rounded-2xl shadow-xl object-cover object-center w-full h-[400px] md:h-[450px]"
            />
          </div>

          <div className="space-y-6 md:order-1">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Community</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a balance of perennial favorites like apple fritters and Reese’s donuts, to creative
              collaborations like our Burnt Church Distillery series, we’ve crafted something for every
              palate.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond the kitchen, we’ve found joy in becoming active members of Bluffton — from music and
              local festivals to paddleboarding and golf. Every donut is made with joy, and every customer
              is family.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
              We can’t wait to serve you a slice of our Lowcountry paradise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
