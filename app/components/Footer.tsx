import { Phone, Mail, ArrowRight } from "lucide-react";
import { footer } from "../content";
import { Logo } from "./Logo";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      {/* CTA Section */}
      <div className="py-12 lg:py-16 text-center border-b border-foreground/10">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Ready to transform your data?
          </h3>
          <p className="text-text-muted mb-8 text-lg">
            Join thousands of farmers and enterprises already using MetaMersist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-sky-light active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky/10 px-6 py-3 text-lg font-semibold text-sky transition-all duration-300 hover:bg-sky/20"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Logo className="mb-4" />
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {footer.tagline}
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/metamersist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-sky transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/metamersist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-sky transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links columns */}
            {footer.linkColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
                  {columnIndex === 0 ? "Company" : "Legal"}
                </h4>
                <ul className="space-y-3">
                  {column.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-text-muted hover:text-sky transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div>
              <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${footer.contact.phone}`}
                    className="flex items-center gap-2 text-text-muted hover:text-sky transition-colors duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="flex items-center gap-2 text-text-muted hover:text-sky transition-colors duration-200 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {footer.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-foreground/10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; MetaMersist {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm text-center sm:text-right">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
