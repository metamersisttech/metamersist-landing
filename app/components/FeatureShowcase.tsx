const showcases = [
  {
    id: "everyday",
    eyebrow: "Farm Management",
    title: "Everything you need to run your farm",
    description:
      "From livestock tracking to input management, our platform handles the day-to-day so you can focus on what matters.",
    tags: ["Livestock Tracking", "Health Monitoring", "Feed Management", "Production Analytics"],
    href: "#features",
  },
  {
    id: "together",
    eyebrow: "Grow Together",
    title: "Stronger as a community",
    description:
      "Connect with cooperatives, share best practices, and access collective purchasing power. Agriculture is better together.",
    tags: ["Cooperative Network", "Shared Resources", "Market Access", "Knowledge Hub"],
    href: "#features",
  },
  {
    id: "insights",
    eyebrow: "Growth & Insights",
    title: "Data-driven decisions for better yields",
    description:
      "AI-powered analytics that turn your farm data into actionable insights. Know what to plant, when to harvest, and how to optimize.",
    tags: ["Yield Predictions", "Weather Intelligence", "Market Trends", "Advisory Services"],
    href: "#features",
  },
];

export function FeatureShowcase() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {showcases.map((showcase, index) => (
            <div
              key={showcase.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Content side */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <p className="text-amber font-medium text-xl tracking-wide uppercase mb-4">
                  {showcase.eyebrow}
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  {showcase.title}
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  {showcase.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {showcase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-forest/10 text-forest text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={showcase.href}
                  className="group inline-flex items-center text-sm font-medium text-forest transition-colors hover:text-forest-light"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Visual side - placeholder */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="card-bezel">
                  <div className="card-bezel-inner aspect-[4/3] p-8 flex items-center justify-center">
                    {/* Abstract visual placeholder */}
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-forest/5 to-amber/10 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="w-16 h-16 rounded-lg bg-forest/10" />
                        <div className="w-16 h-16 rounded-lg bg-amber/20" />
                        <div className="w-16 h-16 rounded-lg bg-amber/10" />
                        <div className="w-16 h-16 rounded-lg bg-forest/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
