"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiologist",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    experience: "10 years",
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    specialty: "Pediatrician",
    location: "Abuja, Nigeria",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    experience: "8 years",
  },
  {
    id: 3,
    name: "Dr. Amara Okafor",
    specialty: "Dermatologist",
    location: "Port Harcourt, Nigeria",
    image:
      "/images/doc1.jpg",
    rating: 4.9,
    experience: "12 years",
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    specialty: "Neurologist",
    location: "Kano, Nigeria",
    image:
      "/images/doc.jpg",
    rating: 4.7,
    experience: "9 years",
  },
];

const DoctorsPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || doctor.specialty === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white text-center py-16 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Find Trusted Doctors Near You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/90 max-w-2xl mx-auto"
        >
          Browse through top-rated medical professionals, search by specialty,
          and book appointments easily.
        </motion.p>
      </section>

      {/* Filters & Search */}
      <section className="py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Search */}
        <div className="flex items-center w-full md:w-1/2 border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#0B7EBE]">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            className="w-full outline-none px-3 text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B7EBE]"
        >
          <option value="All">All Specialties</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
        </select>
      </section>

      {/* Doctors Grid */}
      <section className="px-6 md:px-20 pb-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8">
        {filteredDoctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-56 object-cover"
            />
            <div className="md:p-6 py-4 text-center">
              <h3 className="text-lg font-semibold text-[#0B7EBE]">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <p className="text-xs text-gray-500 mt-1">
                {doctor.location}
              </p>
              <div className="flex items-center justify-center mb-4 gap-2 mt-2">
                <span className="text-yellow-500 text-sm">
                  ⭐ {doctor.rating}
                </span>
                <span className="text-gray-500 text-sm">
                  ({doctor.experience} experience)
                </span>
              </div>
              <Link href={`/doctors/${doctor.id}`} className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                View Profile
              </Link>
            </div>
          </motion.div>
        ))}

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No doctors found for your search or filter.
          </p>
        )}
      </section>
    </div>
  );
};

export default DoctorsPage;