'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: 'General Inquiry',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('MmHPzHHwRZt5nou_c'); // Replace with your public key
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData); // Debug: confirm it runs

    const serviceId = 'service_u5x1t7g';     // Replace with your actual service ID
    const templateId = 'template_0jp3m0j';   // Replace with your actual template ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.title,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        alert('Your message has been sent! 🎉');
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: '', email: '', phone: '', title: 'General Inquiry', message: '' });
      })
      .catch((err) => {
        alert('Oops! Something went wrong. Please try again.');
        console.error('EmailJS error:', err);
      });
  };

  return (
    <section className="bg-cream py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-700 mb-8 text-center">
          Have a question or want to place a special order? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Reason for Contact
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Order Request">Order Request</option>
              <option value="Catering">Catering</option>
              <option value="Business Partnership">Business Partnership</option>
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-200 font-semibold shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
