"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Doctors", href: "/doctors" },
    { name: "Consult", href: "/consult" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
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
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-[#19C37D] border-b-2 border-[#19C37D]"
                    : "text-gray-700 hover:text-[#0B7EBE]"
                } pb-1`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-[#19C37D] border-l-4 border-[#19C37D] pl-2"
                      : "text-gray-700 hover:text-[#0B7EBE]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;