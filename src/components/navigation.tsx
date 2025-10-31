"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/#benefits", label: "Benefits" },
    { href: "/#pricing", label: "Plans" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#process", label: "Process" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.03] bg-black/40 backdrop-blur-2xl"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-transparent.png"
                alt="Rolva Logo"
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Rolva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-gray-400 hover:text-white transition-colors relative group font-medium"
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="ml-1 text-xs opacity-50">▾</span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/book">
              <button className="px-5 py-2 text-[13px] font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-200">
                Get in touch
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/[0.03] mt-3"
            >
              <div className="flex flex-col gap-1 pt-4 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[13px] text-gray-400 hover:text-white hover:bg-white/5 transition-all py-2.5 px-3 rounded-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/book" className="block mt-3" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2.5 text-[13px] font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-all duration-200">
                    Get in touch
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
