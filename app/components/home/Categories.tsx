"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Baby, Brain, Eye, Bone, Syringe } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "General Practitioner",
    icon: <Stethoscope className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Your first point of contact for general health issues.",
  },
  {
    id: 2,
    name: "Cardiologist",
    icon: <HeartPulse className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Specializes in heart and blood vessel conditions.",
  },
  {
    id: 3,
    name: "Pediatrician",
    icon: <Baby className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Provides medical care for infants and children.",
  },
  {
    id: 4,
    name: "Dentist",
    icon: <Brain className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Focuses on oral health and dental hygiene.",
  },
  {
    id: 5,
    name: "Neurologist",
    icon: <Brain className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Expert in brain, spinal cord, and nervous system care.",
  },
  {
    id: 6,
    name: "Ophthalmologist",
    icon: <Eye className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Diagnoses and treats eye conditions and vision problems.",
  },
  {
    id: 7,
    name: "Orthopedic",
    icon: <Bone className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Specializes in bones, muscles, and joint problems.",
  },
  {
    id: 8,
    name: "Vaccination Specialist",
    icon: <Syringe className="w-10 h-10 text-[#1E90FF]" />,
    desc: "Provides vaccines and preventive health care services.",
  },
];

const Categories = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#f9fbff]">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
          Explore Our Doctor Categories
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Find the right specialist for your health needs.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#E8F3FF] w-20 h-20 flex items-center justify-center rounded-full mb-4">
              {category.icon}
            </div>
            <h3 className="font-semibold text-lg text-[#003366] mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm">{category.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;