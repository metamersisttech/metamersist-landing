import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  badge: string;
  badgeColor?: "purple" | "orange" | "teal";
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  features: Array<{
    icon: LucideIcon;
    label: string;
  }>;
}

export function FeatureSection({
  badge,
  badgeColor = "purple",
  title,
  description,
  ctaText,
  ctaHref,
  features,
}: FeatureSectionProps) {
  const badgeColors = {
    purple: "text-purple",
    orange: "text-orange",
    teal: "text-teal",
  };

  const ctaColors = {
    purple: "bg-purple-light text-purple hover:bg-purple/20",
    orange: "bg-orange-light text-orange hover:bg-orange/20",
    teal: "bg-teal-light text-teal hover:bg-teal/20",
  };

  const boxColors = {
    purple: "bg-purple-light",
    orange: "bg-orange-light",
    teal: "bg-teal-light",
  };

  return (
    <section className="py-16 lg:py-20 max-w-5xl mx-auto">
      {/* Constrained content */}
      <div className="max-w-3xl">
        {/* Badge */}
        <p className={`font-semibold text-xl mb-4 ${badgeColors[badgeColor]}`}>
          {badge}
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight break-words mb-6 text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="text-text-muted text-xl font-medium leading-relaxed mb-8 text-left max-w-2xl">
          {description}
        </p>

        {/* CTA Button */}
        <a
          href={ctaHref}
          className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${ctaColors[badgeColor]}`}
        >
          {ctaText}
        </a>

        {/* Feature Grid - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <Icon
                  className="w-6 h-6 text-foreground flex-shrink-0"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
                <span className="font-medium text-xl text-foreground">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Full-width showcase box */}
      <div className={`mt-16 mx-auto w-full h-[80vh] rounded-3xl ${boxColors[badgeColor]}`} />
    </section>
  );
}
