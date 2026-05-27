import { Check } from "lucide-react";

const features = [
  {
    title: "All included",
    description: "Full access from day one — nothing held back.",
  },
  {
    title: "No fees",
    description: "Transparent pricing with zero hidden costs.",
  },
  {
    title: "Setup",
    description: "Go live fast and smooth with expert onboarding support.",
  },
  {
    title: "Support",
    description: "Real people, ready to help whenever you need.",
  },
];

export function GetStarted() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Headlines */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Ready to get started? <br />
            <span className="text-text-muted">Launch in less than a week.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-background" strokeWidth={3} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#demo"
            className="inline-block px-8 py-4 rounded-full bg-teal-light text-teal font-semibold text-lg hover:bg-teal/20 transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
