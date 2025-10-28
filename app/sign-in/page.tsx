"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Stethoscope } from "lucide-react";

const SignInPage = () => {
  const [role, setRole] = useState("user"); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-2xl p-4 md:p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-[#0A2647] text-center mb-6">
          Welcome Back
        </h2>

        {/* Role Selector */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <button
            onClick={() => setRole("user")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
              role === "user"
                ? "bg-[#0B7EBE] text-white border-[#0B7EBE]"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <User size={16} /> User
          </button>
          <button
            onClick={() => setRole("doctor")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
              role === "doctor"
                ? "bg-[#19C37D] text-white border-[#19C37D]"
                : "border-gray-300 text-gray-600"
            }`}
          >
            <Stethoscope size={16} /> Doctor
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0B7EBE]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#0B7EBE]"
          />

          <button className="w-full bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Sign In
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-[#0B7EBE] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignInPage;