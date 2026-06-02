"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { navigation } from "../content";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      <header className="relative md:fixed top-0 left-0 right-0 z-50 pt-4">
        {/* Before scroll: Full-width layout */}
        <nav
          className={`
            mx-auto w-full py-3 max-w-[95%] md:transition-all md:duration-500
            ${scrolled ? "md:max-w-3xl glass md:rounded-xl md:shadow-lg md:ring-1 md:ring-foreground/5 md:px-3" : ""}
          `}
          style={{ transitionTimingFunction: "var(--ease-bounce)" }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Logo with subtitle */}
            <div className="flex md:flex-1 items-center gap-2">
              <Logo className="" />
            </div>

            {/* Center: Nav links (desktop) */}
            <div className="hidden md:flex md:flex-1 md:justify-center md:gap-8">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-nowrap font-medium text-foreground/70 transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Sign in link (desktop) */}
            <div className="hidden md:flex md:flex-1 md:justify-end">
              <a
                href={navigation.signIn.href}
                className="1 text-base font-medium text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                {navigation.signIn.label}
              </a>
            </div>
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
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "top-2.5 rotate-45" : "top-1"
                    }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
                <span
                  className={`absolute left-0 top-2.5 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "top-2.5 -rotate-45" : "top-4"
                    }`}
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="relative h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navigation.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-3xl font-semibold text-foreground transition-all duration-500 ${mobileMenuOpen
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

            <div className="flex flex-col items-center gap-4 mt-4">
              <a
                href={navigation.cta.href}
                className={`px-8 py-4 rounded-full bg-sky text-lg font-medium text-white transition-all duration-500 ${mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionTimingFunction: "var(--ease-smooth)",
                  transitionDelay: mobileMenuOpen ? `${(navigation.links.length + 1) * 75}ms` : "0ms",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigation.cta.label}
              </a>
              <a
                href={navigation.signIn.href}
                className={`text-lg text-foreground/70 transition-all duration-500 ${mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionTimingFunction: "var(--ease-smooth)",
                  transitionDelay: mobileMenuOpen ? `${(navigation.links.length + 2) * 75}ms` : "0ms",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigation.signIn.label}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
