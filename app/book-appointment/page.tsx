"use client";

import React, { useState } from "react";
import { Calendar, Clock, PhoneCall, Video, MessageSquare, ArrowRight } from "lucide-react";

const AppointmentPage = () => {
  const [consultType, setConsultType] = useState("video");

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0B7EBE]">
          Book an Appointment
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Schedule a session with a licensed medical professional in minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Section: Details */}
        <div className="md:col-span-2 space-y-10">
          {/* Doctor Info */}
          <div className="flex items-center gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7"
              alt="Doctor"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-[#19C37D]">Dr. Sarah Johnson</h2>
              <p className="text-gray-600 text-sm">Cardiologist • 12+ Years Experience</p>
            </div>
          </div>

          {/* Consultation Type */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#0B7EBE]">Consultation Type</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { type: "chat", icon: <MessageSquare size={20} />, label: "Chat" },
                { type: "voice", icon: <PhoneCall size={20} />, label: "Voice Call" },
                { type: "video", icon: <Video size={20} />, label: "Video Call" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setConsultType(item.type)}
                  className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition ${
                    consultType === item.type
                      ? "border-[#19C37D] bg-[#19C37D]/10 text-[#19C37D]"
                      : "border-gray-300 hover:border-[#19C37D]"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selector */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#0B7EBE]">Select Date</h3>
            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <Calendar size={22} className="text-[#19C37D]" />
              <input type="date" className="w-full outline-none" />
            </div>
          </div>

          {/* Time Selector */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#0B7EBE]">Select Time</h3>
            <div className="flex items-center gap-3 p-4 border rounded-xl">
              <Clock size={22} className="text-[#19C37D]" />
              <input type="time" className="w-full outline-none" />
            </div>
          </div>

          {/* Reason */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#0B7EBE]">Reason for Consultation</h3>
            <textarea
              rows={5}
              placeholder="Describe your symptoms or health concerns..."
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#0B7EBE]"
            ></textarea>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-6 text-[#0B7EBE]">Appointment Summary</h3>

          <div className="space-y-3 text-gray-700">
            <p className="flex justify-between"><span>Consultation Type:</span> <span className="font-medium capitalize">{consultType}</span></p>
            <p className="flex justify-between"><span>Doctor:</span> <span>Dr. Sarah Johnson</span></p>
            <p className="flex justify-between"><span>Fee:</span> <span className="font-semibold">₦7,500</span></p>
          </div>

          <button className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white font-semibold py-3 rounded-full mt-8 flex justify-center items-center gap-2 hover:opacity-90 transition">
            Book Appointment <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;