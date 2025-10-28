"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white py-16 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/90">
          Have a question, need support, or want to partner with us? Our team is
          always ready to hear from you. Let’s make healthcare better together.
        </p>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-[#0B7EBE]">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Whether you're a patient, a doctor, or an investor, we’d love to hear
            from you. Reach out via any of the channels below or send us a message
            directly using the contact form.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#19C37D]/10 text-[#19C37D] p-3 rounded-full">
                📍
              </div>
              <p>
                <strong>Head Office:</strong> <br />
                42 Medical Plaza, Victoria Island, Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#19C37D]/10 text-[#19C37D] p-3 rounded-full">
                📞
              </div>
              <p>
                <strong>Phone:</strong> <br />
                +234 800 123 4567
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#19C37D]/10 text-[#19C37D] p-3 rounded-full">
                ✉️
              </div>
              <p>
                <strong>Email:</strong> <br />
                support@medkia.com
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-[#0B7EBE]">
              Working Hours
            </h3>
            <p className="text-gray-700">Monday – Friday: 8:00 AM – 6:00 PM</p>
            <p className="text-gray-700">Saturday: 9:00 AM – 3:00 PM</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-6 text-[#0B7EBE]">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0B7EBE]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0B7EBE]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0B7EBE]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-20 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#0B7EBE]">
          Find Us on the Map
        </h2>
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl overflow-hidden">
          {/* Replace with real map iframe when ready */}
          <iframe
            title="Medkia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.142476255739!2d3.4212!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51101aa85ab%3A0x68e16d2aeb56d8f!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1696000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Let's Build a Healthier Future
        </h2>
        <p className="text-white/90 mb-6">
          We’re here to support you every step of the way. Reach out today.
        </p>
        <button className="bg-white text-[#0B7EBE] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Talk to Support
        </button>
      </section>
    </div>
  );
};

export default ContactPage;