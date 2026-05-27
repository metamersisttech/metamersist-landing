import { MousePointerClick, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: <MousePointerClick className="w-12 h-12 text-foreground" strokeWidth={1.5} fill="currentColor" />,
    text: "Easy to use from day one.",
  },
  {
    icon: <Users className="w-12 h-12 text-foreground" strokeWidth={1.5} fill="currentColor" />,
    text: "Designed to bring communities together.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-foreground" strokeWidth={1.5} fill="currentColor" />,
    text: "Made to grow with your farm.",
  },
];

export function FeatureIntro() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Headline with emojis */}
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-center mb-16 lg:mb-20">
          Built for farmers,{" "}
          <span className="inline-flex items-center gap-1 mx-1">
            <span className="text-3xl sm:text-5xl">🌾</span>
            <span className="text-3xl sm:text-5xl">🚜</span>
            <span className="text-3xl sm:text-5xl">🌱</span>
          </span>{" "}
          not <br /> just the process around them.
        </h2>

        {/* Three icon columns */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>
              {/* Text */}
              <p className="text-text-muted font-medium text-xl leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
