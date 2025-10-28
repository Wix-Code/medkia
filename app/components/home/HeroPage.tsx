"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroPage = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-12 bg-gradient-to-b from-[#f5faff] to-white overflow-hidden">
      {/* LEFT SECTION - Text Content */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Consult Top <span className="text-[#1E90FF]">Doctors</span> Anytime,
          Anywhere
        </motion.h1>

        <motion.p
          className="text-gray-600 mt-4 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Medkia connects you with certified doctors for instant online
          consultations. Get professional medical advice and treatment from the
          comfort of your home.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link
            href="/consult"
            className="bg-[#1E90FF] hover:bg-[#187bcd] text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
          >
            Start Consultation
          </Link>
          <Link
            href="/doctors"
            className="border border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Meet Our Doctors
          </Link>
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.div
          className="relative w-full md:w-[400px] lg:w-[450px] h-[350px] md:h-[400px] lg:h-[450px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src="/images/doctors.jpg"
            alt="Doctor Consultation"
            className="object-contain w-full h-full drop-shadow-lg"
          />
        </motion.div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1E90FF]/20 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
};

export default HeroPage;