"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Auto-hide on scroll down, reveal on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-cream/90 backdrop-blur-sm text-charcoal sticky top-0 z-50 border-b border-black/5 transition-transform duration-300 will-change-transform ${
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 md:px-6 py-2.5">
        {/* Logo lockup: transparent mark + live text */}
        <Link href="/" className="flex flex-col items-center shrink-0 leading-none" aria-label="SD Construction & Development — Home">
          <Image
            src="/logo.png"
            alt="SD Construction & Development"
            width={207}
            height={100}
            quality={100}
            priority
            className="h-8 md:h-10 w-auto"
          />
          <span className="mt-2 text-sm md:text-xl font-bold uppercase tracking-[0.02em] text-[#100c6a] text-center">
            SD Construction &amp; Development
          </span>
          <span className="mt-1 text-[11px] md:text-sm text-[#100c6a]/60 underline underline-offset-2 decoration-[#100c6a]/40 text-center">
            General Construction &amp; Remodeling
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-charcoal/70 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden inline-flex items-center justify-center p-2 -mr-2 text-charcoal"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="md:hidden border-t border-black/5 bg-cream px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm uppercase tracking-wider text-charcoal/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-accent text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors text-center"
          >
            Request a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}