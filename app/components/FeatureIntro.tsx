import { featureIntro } from "../content";

export function FeatureIntro() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Headline with emojis */}
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-center mb-16 lg:mb-20">
          {featureIntro.headline.before}{" "}
          <span className="inline-flex items-center gap-1 mx-1">
            {featureIntro.headline.emojis.map((emoji, index) => (
              <span key={index} className="text-2xl sm:text-5xl">{emoji}</span>
            ))}
          </span>{" "}
          {featureIntro.headline.after}
        </h2>

        {/* Three icon columns */}
        <div className="grid md:grid-cols-3 gap-4">
          {featureIntro.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center px-4">
                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} fill="currentColor" />
                </div>
                {/* Text */}
                <p className="text-text-muted font-medium text-xl leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
