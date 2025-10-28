"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative bg-[#f0f8ff] overflow-hidden py-20 md:py-28 px-6 md:px-16 lg:px-24">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#1E90FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#003366]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-[#E8F3FF] w-20 h-20 flex items-center justify-center rounded-full mb-6">
          <Stethoscope className="w-10 h-10 text-[#1E90FF]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] max-w-2xl leading-tight">
          Take Charge of Your Health, Consult a Doctor Anytime, Anywhere
        </h2>

        <p className="text-gray-600 mt-4 text-lg max-w-xl">
          Medkia connects you with certified doctors for online consultations,
          prescriptions, and follow-ups all from the comfort of your home.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/consult" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E90FF] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#1877CC] transition-all"
            >
              Book a Consultation
            </motion.button>
          </Link>

          <Link href="/doctors" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#1E90FF] text-[#1E90FF] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#E8F3FF] transition-all"
            >
              Browse Doctors
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;