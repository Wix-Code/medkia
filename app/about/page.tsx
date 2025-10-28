"use client";

import React from "react";
import {
  HeartPulse,
  Eye,
  Users,
  ShieldCheck,
  Lightbulb,
  HandHeart,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-6 md:px-20 flex flex-col items-center text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Medkia</h1>
        <p className="max-w-2xl text-sm md:text-lg text-white/90">
          Empowering people to connect with licensed doctors easily, safely, and conveniently — wherever they are.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#19C37D]">
            <HeartPulse size={28} />
            <h2 className="text-2xl font-semibold text-[#0B7EBE]">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            At <strong>Medkia</strong>, our mission is simple — to make quality healthcare
            accessible and affordable for everyone. We believe that no one should
            have to travel miles or wait hours to speak with a professional doctor.
            Through modern technology, we bring licensed doctors closer to you in
            real time, wherever you are.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#19C37D]">
            <Eye size={28} />
            <h2 className="text-2xl font-semibold text-[#0B7EBE]">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become the most trusted telemedicine platform in
            Africa and beyond — connecting people and doctors seamlessly while
            maintaining the highest standards of care, security, and professionalism.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-gray-50 py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center">
        <div className="w-22 flex items-center bg-white justify-center h-22 shadow-sm rounded-full"><Users size={40} className="text-[#19C37D]" /></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B7EBE]">
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <strong>Medkia</strong> is a health-tech startup built to redefine healthcare
          access. We are a team of passionate developers, healthcare experts, and
          innovators dedicated to helping patients receive fast, secure, and
          reliable medical advice. Our platform allows users to find and consult
          with doctors via video, chat, or call — all from the comfort of their homes.
        </p>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#0B7EBE]">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-2xl items-center justify-center flex gap-3 flex-col p-6 hover:shadow-lg transition">
            <div className="w-20 flex items-center justify-center h-20 shadow-sm rounded-full"><ShieldCheck size={36} className="text-[#19C37D]" /></div>
            <h3 className="text-xl font-semibold text-[#19C37D]">
              Trust & Integrity
            </h3>
            <p className="text-gray-700">
              We work with licensed medical professionals and ensure every
              consultation upholds honesty, transparency, and confidentiality.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl items-center justify-center flex gap-3 flex-col p-6 hover:shadow-lg transition">
            <div className="w-20 flex items-center justify-center h-20 shadow-sm rounded-full"><Lightbulb size={36} className="text-[#19C37D]" /></div>
            <h3 className="text-xl font-semibold text-[#19C37D]">
              Innovation
            </h3>
            <p className="text-gray-700 text-center">
              We constantly leverage technology to make healthcare more efficient,
              reliable, and accessible to everyone, regardless of location.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl items-center justify-center flex gap-3 flex-col p-6 hover:shadow-lg transition">
            <div className="w-20 flex items-center justify-center h-20 shadow-sm rounded-full"><HandHeart size={36} className="text-[#19C37D]" /></div>
            <h3 className="text-xl font-semibold mb-2 text-[#19C37D]">
              Compassion
            </h3>
            <p className="text-gray-700 text-center">
              Every interaction matters. We put empathy and care at the center of
              every service we provide to our patients and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center">
        <div className="w-22 flex items-center justify-center h-22 shadow-sm rounded-full"><Users size={40} className="text-[#19C37D]" /></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B7EBE]">
          Our Team
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Behind Medkia is a passionate team of engineers, designers, and medical
          professionals working together to bridge the gap between patients and
          doctors. Together, we’re building a future where healthcare is within
          everyone’s reach.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center bg-linear-to-r from-[#0B7EBE] to-[#19C37D] text-white">
        <div className="w-22 flex items-center bg-white justify-center h-22 shadow-sm rounded-full"><Users size={40} className="text-[#19C37D]" /></div>
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3">
          Join Us in Transforming Healthcare
        </h2>
        <p className="max-w-2xl mx-auto text-white/90">
          Whether you're a doctor or a patient, Medkia is here to make healthcare
          simpler, faster, and more human.
        </p>
        <button className="bg-white text-[#0B7EBE] font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
          Get Started <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default AboutPage;