import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import emailjs from '@emailjs/browser'; 

/* helper — render icon safely without JSX  */
const Icon = (Cmp: IconType, className?: string) =>
    React.createElement(Cmp as React.ComponentType<any>, { className });

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const serviceId = 'service_u5x1t7g';
    const templateId = 'template_0jp3m0j';
    const publicKey = 'MmHPzHHwRZt5nou_c';
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.inquiryType, // 'title' in the EmailJS template maps to inquiryType here
      message: formData.message
    };
  
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Your message has been sent! 🎉');
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      })
      .catch((err) => {
        alert('Oops! Something went wrong. Please try again.');
        console.error('EmailJS error:', err);
      });
  };
  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* ---------- Contact Form ---------- */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 font-pacifico">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div> 
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>    

              <div>
                <label htmlFor="inquiryType" className="block text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="catering">Catering</option>
                  <option value="general">General Questions</option>
                  <option value="franchise">Franchise</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ---------- Contact Info ---------- */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">Contact Info</h3>

            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-start gap-4">
                {Icon(FaPhoneAlt, 'text-orange-500 mt-1')}
                <a href="tel:8437076860" className="hover:underline">
                  843‑707‑6860
                </a>
              </li>

              <li className="flex items-start gap-4">
                {Icon(FaEnvelope, 'text-orange-500 mt-1')}
                <a href="mailto:info@alljoydonut.com" className="hover:underline">
                  info@alljoydonut.com
                </a>
              </li>

              <li className="flex items-start gap-4">
                {Icon(FaMapMarkerAlt, 'text-orange-500 mt-1')}
                <a
                  href="https://www.google.com/maps?q=22+Heyward+St,+Bluffton,+SC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  22 Heyward St, Bluffton SC
                </a>
              </li>

              <li className="flex items-start gap-4">
                {Icon(FaClock, 'text-orange-500 mt-1')}
                Fri – Sun, 7 am – 1 pm
              </li>
            </ul>

            <div className="mt-10 bg-orange-100 text-orange-800 p-6 rounded-xl text-center font-semibold text-lg">
              Interested in Franchising? <br />
              <span className="underline decoration-dotted hover:text-orange-600 cursor-pointer">
                Contact Us Now!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
