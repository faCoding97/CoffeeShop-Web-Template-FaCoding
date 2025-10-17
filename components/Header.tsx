"use client";
// Header & Navigation bar with sticky behavior and mobile menu
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-coffee-100">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-extrabold text-xl md:text-2xl text-coffee-900">
          ElixCode <span className="text-accent-600">Coffee</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-semibold text-coffee-800">
          <Link href="/#story" className="hover:text-accent-600">
            Our Story
          </Link>
          <Link href="/menu" className="hover:text-accent-600">
            Menu
          </Link>
          <Link href="/about" className="hover:text-accent-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent-600">
            Contact
          </Link>
          <Link href="/#reservation" className="btn-primary">
            Book Table
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-coffee-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-coffee-100 bg-white">
          <nav className="container py-3 flex flex-col gap-3 font-semibold text-coffee-800">
            <Link href="/#story" onClick={() => setOpen(false)}>
              Our Story
            </Link>
            <Link href="/menu" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href="/#reservation"
              onClick={() => setOpen(false)}
              className="btn-primary w-fit">
              Book Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
