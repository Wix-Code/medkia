"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, User, MapPin } from "lucide-react";
import Image from "next/image";

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Chinedu Okafor",
      specialty: "Cardiologist",
      image: "/images/doc2.jpg",
      location: "Lagos, Nigeria",
      experience: "10+ years experience",
    },
    {
      id: 2,
      name: "Dr. Aisha Bello",
      specialty: "Dermatologist",
      image: "/images/doc7.jpg",
      location: "Abuja, Nigeria",
      experience: "8+ years experience",
    },
    {
      id: 3,
      name: "Dr. John Nwosu",
      specialty: "Pediatrician",
      image: "/images/doc3.jpg",
      location: "Enugu, Nigeria",
      experience: "12+ years experience",
    },
    {
      id: 4,
      name: "Dr. Mary Chukwu",
      specialty: "Gynecologist",
      image: "/images/doc4.jpeg",
      location: "Port Harcourt, Nigeria",
      experience: "9+ years experience",
    },
    {
      id: 5,
      name: "Dr. Chinedu Okafor",
      specialty: "Cardiologist",
      image: "/images/doc1.jpg",
      location: "Lagos, Nigeria",
      experience: "10+ years experience",
    },
    {
      id: 6,
      name: "Dr. Aisha Bello",
      specialty: "Dermatologist",
      image: "/images/doc5.webp",
      location: "Abuja, Nigeria",
      experience: "8+ years experience",
    },
    {
      id: 7,
      name: "Dr. John Nwosu",
      specialty: "Pediatrician",
      image: "/images/doc.jpg",
      location: "Enugu, Nigeria",
      experience: "12+ years experience",
    },
    {
      id: 8,
      name: "Dr. Mary Chukwu",
      specialty: "Gynecologist",
      image: "/images/doc6.jpeg",
      location: "Port Harcourt, Nigeria",
      experience: "9+ years experience",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B7EBE] mb-4">
          Meet Our <span className="text-[#19C37D]">Top Doctors</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Our platform is home to certified and trusted healthcare professionals
          dedicated to providing you the best medical experience — anytime, anywhere.
        </p>
      </motion.div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {doctors.map((doc, index) => (
          <motion.div
            key={doc.id}
            className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Doctor Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={doc.image}
                alt={doc.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Doctor Info */}
            <div className="p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-[#0B7EBE] mb-1">
                {doc.name}
              </h3>
              <p className="text-[#19C37D] font-medium mb-2 flex items-center justify-center gap-1">
                <Stethoscope size={16} /> {doc.specialty}
              </p>
              <p className="text-gray-600 text-sm mb-2 flex items-center justify-center gap-1">
                <MapPin size={14} /> {doc.location}
              </p>
              <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                <User size={14} /> {doc.experience}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:opacity-90 transition-all">
          View All Doctors
        </button>
      </motion.div>
    </section>
  );
};

export default DoctorsSection;