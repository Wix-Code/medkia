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
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-6 md:px-20 flex flex-col items-center text-center py-16"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          About Medkia
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          custom={0.2}
          className="max-w-2xl text-sm md:text-lg text-white/90"
        >
          Empowering people to connect with licensed doctors easily, safely, and
          conveniently — wherever they are.
        </motion.p>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 text-[#19C37D]">
            <HeartPulse size={28} />
            <h2 className="text-2xl font-semibold text-[#0B7EBE]">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mt-3">
            At <strong>Medkia</strong>, our mission is simple — to make quality
            healthcare accessible and affordable for everyone. We believe that
            no one should have to travel miles or wait hours to speak with a
            professional doctor. Through modern technology, we bring licensed
            doctors closer to you in real time, wherever you are.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 text-[#19C37D]">
            <Eye size={28} />
            <h2 className="text-2xl font-semibold text-[#0B7EBE]">
              Our Vision
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mt-3">
            Our vision is to become the most trusted telemedicine platform in
            Africa and beyond — connecting people and doctors seamlessly while
            maintaining the highest standards of care, security, and
            professionalism.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-50 py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="w-22 flex items-center bg-white justify-center h-22 shadow-sm rounded-full"
        >
          <Users size={40} className="text-[#19C37D]" />
        </motion.div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B7EBE]">
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <strong>Medkia</strong> is a health-tech startup built to redefine
          healthcare access. We are a team of passionate developers, healthcare
          experts, and innovators dedicated to helping patients receive fast,
          secure, and reliable medical advice. Our platform allows users to find
          and consult with doctors via video, chat, or call — all from the
          comfort of their homes.
        </p>
      </motion.section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#0B7EBE]"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <ShieldCheck size={36} className="text-[#19C37D]" />,
              title: "Trust & Integrity",
              desc: "We work with licensed medical professionals and ensure every consultation upholds honesty, transparency, and confidentiality.",
            },
            {
              icon: <Lightbulb size={36} className="text-[#19C37D]" />,
              title: "Innovation",
              desc: "We constantly leverage technology to make healthcare more efficient, reliable, and accessible to everyone, regardless of location.",
            },
            {
              icon: <HandHeart size={36} className="text-[#19C37D]" />,
              title: "Compassion",
              desc: "Every interaction matters. We put empathy and care at the center of every service we provide to our patients and partners.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              variants={fadeInUp}
              className="bg-white shadow-md rounded-2xl items-center justify-center flex gap-3 flex-col p-6 hover:shadow-lg transition"
            >
              <div className="w-20 flex items-center justify-center h-20 shadow-sm rounded-full">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#19C37D]">
                {val.title}
              </h3>
              <p className="text-gray-700 text-center">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-50 py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center"
      >
        <div className="w-22 flex items-center justify-center h-22 shadow-sm rounded-full">
          <Users size={40} className="text-[#19C37D]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B7EBE]">
          Our Team
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Behind Medkia is a passionate team of engineers, designers, and
          medical professionals working together to bridge the gap between
          patients and doctors. Together, we’re building a future where
          healthcare is within everyone’s reach.
        </p>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 px-6 flex items-center justify-center flex-col gap-5 md:px-20 text-center bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white"
      >
        <div className="w-22 flex items-center bg-white justify-center h-22 shadow-sm rounded-full">
          <Users size={40} className="text-[#19C37D]" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3">
          Join Us in Transforming Healthcare
        </h2>
        <p className="max-w-2xl mx-auto text-white/90">
          Whether you're a doctor or a patient, Medkia is here to make healthcare
          simpler, faster, and more human.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#0B7EBE] font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-100 transition"
        >
          Get Started <ArrowRight size={18} />
        </motion.button>
      </motion.section>
    </div>
  );
};

export default AboutPage;