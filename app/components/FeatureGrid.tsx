import { MessageSquare } from "lucide-react";
import { BentoGrid } from "./BentoGrid";

interface FeatureGridProps {
  badge: string;
  badgeColor?: "purple" | "orange" | "teal";
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function FeatureGrid({
  badge,
  badgeColor = "orange",
  title,
  description,
  ctaText,
  ctaHref,
}: FeatureGridProps) {
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

  return (
    <section className="py-16 lg:py-20 max-w-5xl mx-auto">
      <div className="max-w-3xl px-6 lg:px-8 text-center mx-auto">
        {/* Badge */}
        <p className={`font-semibold text-xl mb-4 ${badgeColors[badgeColor]}`}>
          {badge}
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-text-muted text-xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Button */}
        <a
          href={ctaHref}
          className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${ctaColors[badgeColor]}`}
        >
          {ctaText}
        </a>
      </div>
      <BentoGrid
        cards={[
          {
            icon: <MessageSquare className="w-8 h-8 text-sky-600" />,
            title: "Posts",
            description:
              "Keep everyone in the loop with thoughtful, timely updates — big or small.",
            bgColor: "bg-sky-100",
          },
          {
            title: "Announcements",
            description:
              "Share important news and updates with your entire team instantly.",
            bgColor: "bg-purple-100",
          },
          {
            title: "Events",
            description:
              "Plan and coordinate team gatherings, meetings, and celebrations.",
            bgColor: "bg-emerald-100",
          },
          {
            title: "Recognition",
            description:
              "Celebrate achievements and acknowledge great work across your organization.",
            bgColor: "bg-amber-100",
          },
        ]}
      />
    </section>
  );
}
