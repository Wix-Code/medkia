"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star, Phone, Mail, Clock } from "lucide-react";

const DoctorProfilePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero / Header Section */}
      <section className="relative w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
          alt="Doctor"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Dr. Jane Smith</h1>
          <p className="text-lg md:text-xl mb-3">Cardiologist</p>

          <div className="flex items-center gap-3 text-yellow-300 mb-4">
            <Star size={18} />
            <p className="font-semibold text-white">4.8 (320 reviews)</p>
          </div>

          <div className="flex flex-wrap gap-4 text-white/90">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Victoria Island, Lagos
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} /> 10 Years Experience
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +234 800 123 4567
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> jane.smith@medkia.com
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0B7EBE]">
            About Dr. Jane Smith
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Jane Smith is a highly respected cardiologist with over a decade
            of experience diagnosing and treating cardiovascular diseases. She
            combines advanced medical expertise with compassionate patient care,
            ensuring that every patient receives personalized attention and the
            best treatment options available.
          </p>
          <p className="text-gray-700 leading-relaxed">
            She has worked in top hospitals across Nigeria and has participated
            in numerous international cardiovascular research projects. Her
            mission is to improve the quality of life for her patients through
            preventive care and cutting-edge treatment methods.
          </p>
        </motion.div>
      </section>

      {/* Qualifications & Education */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#0B7EBE]">
            Qualifications & Education
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              🎓 MBBS – University of Lagos (2008)
            </li>
            <li>
              🩺 Fellowship in Cardiology – Harvard Medical School (2014)
            </li>
            <li>
              📘 Certified in Advanced Cardiac Life Support (ACLS)
            </li>
            <li>
              🏆 Member, Nigerian Cardiac Society (NCS)
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0B7EBE]">
            Patient Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">Patient {i + 1}</h3>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  “Dr. Jane Smith is an amazing doctor! She took time to explain
                  everything clearly and made me feel at ease. I highly recommend
                  her to anyone looking for a cardiologist.”
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Booking Section */}
      <section className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white py-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Book an Appointment with Dr. Jane Smith
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to get professional advice and expert care.
            Available for both in-person and online consultations.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-[#0B7EBE] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Book Appointment
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#19C37D] transition">
              Chat with Doctor
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DoctorProfilePage;