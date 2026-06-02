import { BentoGrid } from "./BentoGrid";
import { products } from "../content";

export function FeatureGrid() {
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

  const bentoCards = products.cards.map((card) => {
    const Icon = card.icon;
    return {
      icon: <Icon className="w-8 h-8 text-sky-600" />,
      title: card.title,
      description: card.description,
      bgColor: card.bgColor,
    };
  }) as [
    { icon: React.ReactNode; title: string; description: string; bgColor: string },
    { icon: React.ReactNode; title: string; description: string; bgColor: string },
    { icon: React.ReactNode; title: string; description: string; bgColor: string },
    { icon: React.ReactNode; title: string; description: string; bgColor: string }
  ];

  return (
    <section id="solutions" className="py-16 lg:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-3xl px-6 lg:px-8 text-center mx-auto">
        {/* Badge */}
        <p className={`font-semibold text-xl mb-4 ${badgeColors[products.badgeColor]}`}>
          {products.badge}
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          {products.title}
        </h2>

        {/* Description */}
        <p className="text-text-muted text-xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
          {products.description}
        </p>

        {/* CTA Button */}
        <a
          href={products.ctaHref}
          className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${ctaColors[products.badgeColor]}`}
        >
          {products.ctaText}
        </a>
      </div>
      <BentoGrid cards={bentoCards} />
    </section>
  );
}
