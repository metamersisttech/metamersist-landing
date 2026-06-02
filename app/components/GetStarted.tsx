import { getStarted } from "../content";

export function GetStarted() {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Headlines */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            {getStarted.headline.main} <br />
            <span className="text-text-muted">{getStarted.headline.sub}</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {getStarted.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-background" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-text-muted text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={getStarted.cta.href}
            className="inline-block px-8 py-4 rounded-full bg-teal-light text-teal font-semibold text-lg hover:bg-teal/20 transition-colors"
          >
            {getStarted.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
