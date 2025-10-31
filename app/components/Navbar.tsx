"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Simulated user state (replace with real auth)
  const isLoggedIn = true;
  const user = { name: "Dr. Jane Doe", avatar: "/doctor-avatar.jpg" };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Consult", href: "/consult" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0B7EBE]">
          Medkia<span className="text-[#19C37D]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition pb-1 ${
                  isActive
                    ? "text-[#19C37D] border-b-2 border-[#19C37D]"
                    : "text-gray-700 hover:text-[#0B7EBE]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* User section */}
          <div className="relative ml-6">
            {!isLoggedIn ? (
              <Link
                href="/signin"
                className="bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Sign In
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-[#19C37D] cursor-pointer"
                />

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-3 bg-white border border-gray-100 shadow-lg rounded-lg w-48 overflow-hidden"
                    >
                      <Link
                        href="/appointments"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Appointments
                      </Link>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => alert("Logged out")}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-40 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="text-2xl font-bold text-[#0B7EBE]"
                onClick={() => setIsOpen(false)}
              >
                Medkia<span className="text-[#19C37D]">.</span>
              </Link>
              <X
                size={28}
                className="cursor-pointer text-gray-700"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition ${
                      isActive
                        ? "text-[#19C37D] border-l-4 border-[#19C37D] pl-3"
                        : "text-gray-700 hover:text-[#0B7EBE]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {!isLoggedIn ? (
                  <>
                    <Link
                      href="/signin"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center bg-gradient-to-r from-[#0B7EBE] to-[#19C37D] text-white py-3 rounded-full font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center border border-[#0B7EBE] text-[#0B7EBE] py-3 rounded-full font-medium mt-3"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-[#19C37D]"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-[#0B7EBE]"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;