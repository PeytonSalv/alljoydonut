// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Airbnb from './pages/Airbnb';


const metaTitle = "All Joy Donuts";
const metaDescription = "All Joy Donuts is a family-owned donut shop in Bluffton, SC. We offer a variety of donuts, coffee, and more. Come visit us today!";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/airbnb" element={<Airbnb />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
