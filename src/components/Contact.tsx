"use client";

import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
            Have questions about buying or selling a product? Reach out to our team and we’ll respond quickly!
          </p>
          <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <p><strong>📍 Address:</strong> Your Address</p>
            <p><strong>📞 Phone:</strong> +92 370 244 0409</p>
            <p><strong>📧 Email:</strong> wazeemaamir145@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg md:shadow-2xl rounded-xl p-6 sm:p-8 space-y-5 sm:space-y-6"
        >
          {submitted && (
            <div className="text-green-600 font-medium border border-green-200 bg-green-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="How can we help you?"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 sm:py-3 rounded-md shadow-md transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
