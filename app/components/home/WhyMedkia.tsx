"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Clock, HeartPulse, Users, Stethoscope } from "lucide-react";

const WhyMedkia = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#19C37D]" />,
      title: "Trusted & Licensed Doctors",
      desc: "All our doctors are certified professionals with years of experience across various specialties — ensuring you get expert, reliable care every time.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#19C37D]" />,
      title: "Access Anytime, Anywhere",
      desc: "No need to visit a hospital for every consultation. Medkia lets you talk to a doctor anytime — all from your phone, tablet, or computer.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#19C37D]" />,
      title: "Instant Appointments",
      desc: "Skip long queues and waiting times. Get connected to available doctors in minutes for fast, efficient healthcare delivery.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#19C37D]" />,
      title: "Comprehensive Care",
      desc: "From primary care to specialist consultations, mental health support, and follow-ups — Medkia covers all aspects of your well-being.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#19C37D]" />,
      title: "Patient-Centered Experience",
      desc: "We designed Medkia with users in mind — making it simple, friendly, and personalized for patients of all ages and backgrounds.",
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-[#19C37D]" />,
      title: "Secure & Confidential",
      desc: "Your privacy matters. Every consultation is encrypted, and your medical records are safely stored with top-grade data protection.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B7EBE] mb-4">
          Why Choose <span className="text-[#19C37D]">Medkia</span>?
        </h2>
        <p className="text-gray-600 text-lg">
          At Medkia, we’re not just building a telemedicine platform — we’re building a
          healthcare experience that’s faster, safer, and more personal.  
          Here’s why patients and doctors choose us.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#0B7EBE] mb-3">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#0B7EBE] mb-4">
          Experience the Future of Healthcare with <span className="text-[#19C37D]">Medkia</span>
        </h3>
        <p className="text-gray-600 mb-6">
          Join thousands of patients enjoying seamless, affordable, and secure medical consultations.
        </p>
        <button className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default WhyMedkia;