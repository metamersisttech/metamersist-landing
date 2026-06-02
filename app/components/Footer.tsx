import { Zap, Phone, Mail } from "lucide-react";
import { footer } from "../content";

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Zap className="w-8 h-8 text-text-muted mb-4" strokeWidth={1.5} />
            <p className="text-xl font-semibold text-text-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Links columns */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 lg:gap-24">
            {footer.linkColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}

            {/* Contact column */}
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${footer.contact.phone}`}
                  className="flex items-center gap-2 text-text-muted hover:text-foreground transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="flex items-center gap-2 text-text-muted hover:text-foreground transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            {footer.copyright}
          </p>
          <p className="text-text-muted text-sm">
            &copy; MetaMersist {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
