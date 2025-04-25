import React from 'react';
import Hero from '../components/Hero';
import ExploreDonuts from '../components/ExploreDonuts';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import ContactForm from '../components/ContactForm';
import Gallery from '../components/Gallery';
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ExploreDonuts />
      <AboutUs />
      <Events />
      <Gallery />
      <ContactForm  />
    </>
  );
};

export default Home;
