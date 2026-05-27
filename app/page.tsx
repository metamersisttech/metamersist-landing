import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeatureIntro } from "./components/FeatureIntro";
import { FeatureSection } from "./components/FeatureSection";
import { FeatureGrid } from "./components/FeatureGrid";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "./components/Footer";
import {
  Users,
  Calendar,
  FileText,
  UserPlus,
  Wallet,
  MessageCircle,
  Target,
  ClipboardList,
  Wrench,
  ClipboardCheck,
  PieChart,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeatureIntro />
        <FeatureSection
          badge="Farm Management"
          badgeColor="purple"
          title="All the basics, done beautifully."
          description="From livestock tracking to input management, our platform handles the day-to-day so you can focus on what matters — without the usual friction."
          ctaText="Learn more"
          ctaHref="#features"
          features={[
            { icon: Users, label: "Livestock directory" },
            { icon: Calendar, label: "Scheduling" },
            { icon: FileText, label: "Records & documents" },
            { icon: UserPlus, label: "Onboarding & offboarding" },
            { icon: Wallet, label: "Expenses" },
          ]}
        />
        <FeatureGrid
          badge="Team culture"
          badgeColor="orange"
          title="Belong together."
          description="Stay connected, celebrate moments, and create a culture where people feel seen and included — no matter where they work."
          ctaText="Learn more"
          ctaHref="#culture"
        />
        <FeatureSection
          badge="Growth & feedback"
          badgeColor="teal"
          title="Grow your people."
          description="Support your team with regular 1-1s, clear goals, and feedback that actually happens. Because real growth comes from the conversations in between the big moments."
          ctaText="Learn more"
          ctaHref="#growth"
          features={[
            { icon: MessageCircle, label: "1-1 Meetings" },
            { icon: Target, label: "Goals" },
            { icon: ClipboardList, label: "Forms" },
            { icon: Wrench, label: "Skills" },
            { icon: ClipboardCheck, label: "Performance Reviews" },
            { icon: PieChart, label: "Analytics" },
          ]}
        />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
