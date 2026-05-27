import { Sailboat } from "lucide-react";

const linkColumns = [
  {
    links: [
      { label: "Price", href: "#price" },
      { label: "What's new", href: "#whats-new" },
      { label: "Help center", href: "#help" },
    ],
  },
  {
    links: [
      { label: "Privacy policy", href: "#privacy" },
      { label: "Terms and conditions", href: "#terms" },
      { label: "Data protection", href: "#data-protection" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Sailboat className="w-8 h-8 text-text-muted mb-4" strokeWidth={1.5} />
            <p className="text-xl font-semibold text-text-muted">
              Smooth sailing.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16 lg:gap-24">
            {linkColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.links.map((link) => (
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            Made by Metamersist
          </p>
          <p className="text-text-muted text-sm">
            &copy; Metamersist {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
