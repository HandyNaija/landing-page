"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center"
          aria-label="HandyNaija home"
        >
          <Image
            src="/Logo.png"
            alt="HandyNaija"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1.5 text-[15.5px] font-medium text-neutral-800 transition-colors hover:text-[#5CA838]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#6DBE45] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="rounded-full bg-[#6DBE45] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#5CA838] active:translate-y-0 sm:px-7"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span
              className={`h-0.5 w-6 rounded bg-neutral-800 transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-neutral-800 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded bg-neutral-800 transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`overflow-hidden border-t border-neutral-200 bg-white transition-[max-height] duration-300 md:hidden ${
          menuOpen ? "max-h-60" : "max-h-0 border-t-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block px-5 py-3.5 text-[15.5px] font-medium text-neutral-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
