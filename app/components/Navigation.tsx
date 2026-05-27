"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Price", href: "#price" },
  { label: "Resources", href: "#resources" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6">
        {/* Before scroll: Full-width layout */}
        <nav
          className={`
            mx-auto max-w-7xl px-6 transition-all duration-500
            ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Logo with subtitle */}
            <div className="flex items-center gap-2">
              <Logo className="" />
              <span className="text-xs text-text-muted hidden sm:inline">By Metamersist</span>
            </div>

            {/* Center: Nav links (desktop) */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Sign in link (desktop) */}
            <a
              href="#signin"
              className="hidden md:inline text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground"
            >
              Sign in
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2.5 rounded-full text-foreground/70 hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-2.5 rotate-45" : "top-1"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
                <span
                  className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-2.5 -rotate-45" : "top-4"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* After scroll: Floating pill nav */}
        <nav
          className={`
            fixed top-4 md:top-6 left-1/2 -translate-x-1/2 transition-all duration-500
            ${scrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-10px]"}
          `}
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        >
          <div className="glass rounded-full px-3 py-2 shadow-lg ring-1 ring-foreground/5">
            <div className="flex items-center gap-1">
              <Logo className="px-2" />

              {/* Desktop nav links */}
              <div className="hidden md:flex md:items-center md:gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground hover:bg-foreground/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Desktop CTA */}
              <a
                href="#demo"
                className="hidden md:inline-flex items-center ml-2 px-5 py-2 rounded-full bg-sky text-sm font-medium text-white transition-all duration-300 hover:bg-sky-light active:scale-[0.98]"
                style={{ transitionTimingFunction: "var(--ease-smooth)" }}
              >
                Book demo
              </a>

              {/* Mobile menu button (scrolled state) */}
              <button
                type="button"
                className="md:hidden p-2 ml-1 rounded-full text-foreground/70 hover:bg-foreground/5 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "top-2.5 rotate-45" : "top-1"
                    }`}
                    style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                  />
                  <span
                    className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                    style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                  />
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      mobileMenuOpen ? "top-2.5 -rotate-45" : "top-4"
                    }`}
                    style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-3xl font-semibold text-foreground transition-all duration-500 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionTimingFunction: "var(--ease-smooth)",
                  transitionDelay: mobileMenuOpen ? `${(index + 1) * 75}ms` : "0ms",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <a
                href="#demo"
                className={`px-8 py-4 rounded-full bg-sky text-lg font-medium text-white transition-all duration-500 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionTimingFunction: "var(--ease-smooth)",
                  transitionDelay: mobileMenuOpen ? `${(navLinks.length + 1) * 75}ms` : "0ms",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book demo
              </a>
              <a
                href="#signin"
                className={`text-lg text-foreground/70 transition-all duration-500 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionTimingFunction: "var(--ease-smooth)",
                  transitionDelay: mobileMenuOpen ? `${(navLinks.length + 2) * 75}ms` : "0ms",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
