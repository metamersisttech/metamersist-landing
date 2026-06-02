import { ReactNode } from "react";

interface BentoCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  bgColor?: string;
  bgImage?: string;
  children?: ReactNode;
}

interface BentoGridProps {
  cards: [BentoCardProps, BentoCardProps, BentoCardProps, BentoCardProps];
}

function BentoCard({
  icon,
  title,
  description,
  bgColor = "bg-blue-100",
  bgImage,
  children,
}: BentoCardProps) {
  return (
    <div
      className={`rounded-3xl overflow-hidden relative h-full ${bgImage ? "" : bgColor}`}
      style={
        bgImage
          ? {
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
          : undefined
      }
    >
      {bgImage && <div className="absolute inset-0 bg-black/20" />}

      <div
        className={`relative z-10 p-8 h-full flex flex-col ${bgImage ? "text-white" : ""}`}
      >
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-lg opacity-80">{description}</p>}
        {children && <div className="mt-auto">{children}</div>}
      </div>
    </div>
  );
}

export function BentoGrid({ cards }: BentoGridProps) {
  return (
    <div className="h-auto md:h-[200dvh] max-w-5xl w-full pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Column 1: 40% / 60% */}
        <div className="flex flex-col gap-6 h-full">
          <div className="min-h-[60vh] md:min-h-0 md:h-[40%]">
            <BentoCard {...cards[0]} />
          </div>
          <div className="min-h-[60vh] md:min-h-0 md:h-[60%]">
            <BentoCard {...cards[1]} />
          </div>
        </div>

        {/* Column 2: 60% / 40% (inverse) */}
        <div className="flex flex-col gap-6 h-full">
          <div className="min-h-[60vh] md:min-h-0 md:h-[60%]">
            <BentoCard {...cards[2]} />
          </div>
          <div className="min-h-[60vh] md:min-h-0 md:h-[40%]">
            <BentoCard {...cards[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
