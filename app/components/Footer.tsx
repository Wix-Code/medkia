"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0C1A30] text-white py-12 px-6 md:px-16 lg:px-24 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#00C6A9]">Medkia</h2>
          <p className="text-sm mt-3 text-gray-300 leading-relaxed">
            Your trusted medical platform for connecting with certified doctors across all specialties. 
            Book appointments, chat with experts, and manage your health conveniently — all in one place.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-[#00C6A9]">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#00C6A9]">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-[#00C6A9]">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#00C6A9]">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-[#00C6A9]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-[#00C6A9] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#00C6A9] transition">About Us</a></li>
            <li><a href="/doctors" className="hover:text-[#00C6A9] transition">Our Doctors</a></li>
            <li><a href="/consult" className="hover:text-[#00C6A9] transition">Consultation</a></li>
            <li><a href="/contact" className="hover:text-[#00C6A9] transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-[#00C6A9]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="text-[#00C6A9]" size={18} />
              <span>Lagos, Nigeria</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="text-[#00C6A9]" size={18} />
              <span>support@medkia.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="text-[#00C6A9]" size={18} />
              <span>+234 800 123 4567</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-[#00C6A9]">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to our newsletter and never miss medical updates and health tips.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00C6A9] hover:bg-[#00b398] transition px-4 py-2 rounded-lg font-semibold"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 my-8"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© {new Date().getFullYear()} <span className="text-[#00C6A9] font-semibold">Medkia</span>. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#00C6A9] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#00C6A9] transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;