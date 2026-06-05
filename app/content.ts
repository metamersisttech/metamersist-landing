import {
  Tractor,
  Users,
  Scale,
  BarChart3,
  MousePointerClick,
  Sparkles,
  Target,
  HeartHandshake,
  Brain,
  BadgeCheck,
  Store,
  Cpu,
  Beef,
  Stethoscope,
  Wallet,
  CloudSun,
} from "lucide-react";

export const navigation = {
  links: [
    { label: "Solutions", href: "#solutions" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  signIn: { label: "Sign in", href: "#signin" },
  cta: { label: "Get Started", href: "#demo" },
};

export const hero = {
  badge: "Now Live — FarmerApp, Flyr & AI-Powered Solutions",
  badgeMobile: "Now Live — Our Solutions",
  headline: "Technology that transforms.",
  rotatingWords: ["Agriculture.", "Communities.", "Lives.", "Tomorrow."],
  subheading:
    "Intelligent platforms that empower farmers and enterprises. Purpose-driven. AI-powered. Human-centered.",
  primaryCta: { label: "Explore Solutions", href: "#solutions" },
  secondaryCta: { label: "Contact Us", href: "#contact" },
  dashboard: {
    title: "MetaMersist Platform",
    subtitle: "Empowering communities",
    metrics: [
      { label: "FarmerApp Users", value: "+2.4K" },
      { label: "Active Projects", value: "4" },
      { label: "Impact", value: "Rural India" },
      { label: "AI Models", value: "6+" },
    ],
  },
};

export const featureIntro = {
  headline: {
    before: "Built for people,",
    emojis: ["🌾", "🤝", "💡"],
    after: "not just processes.",
  },
  features: [
    { icon: MousePointerClick, text: "Farmer-first design from day one." },
    { icon: Users, text: "Connecting communities through technology." },
    { icon: Sparkles, text: "Scaling impact, one solution at a time." },
  ],
};

export const products = {
  badge: "Our Solutions",
  badgeColor: "orange" as const,
  title: "Products Built with Purpose",
  description:
    "From rural farms to urban enterprises, our platforms solve real problems for real people.",
  ctaText: "Learn More",
  ctaHref: "#about",
  cards: [
    {
      icon: Tractor,
      title: "FarmerApp",
      description:
        "Buy, sell, and trade livestock with transparency. Direct market access for farmers, no middlemen.",
      bgColor: "bg-sky-100",
    },
    {
      icon: Users,
      title: "Flyr",
      description:
        "Bringing friends and family together. Plan meetups, share moments, and stay connected.",
      bgColor: "bg-purple-100",
    },
    {
      icon: Scale,
      title: "AI Lawyer",
      description:
        "Affordable legal guidance powered by AI. Draft cases, get advice, and prepare arguments — accessible to all.",
      bgColor: "bg-emerald-100",
    },
    {
      icon: BarChart3,
      title: "AgriInsights",
      description:
        "AI-driven crop advisory, weather forecasts, and market intelligence for smarter farming decisions.",
      bgColor: "bg-amber-100",
    },
  ],
};

export const featureSection = {
  badge: "Our Mission",
  badgeColor: "purple" as const,
  title: "Farmer First — Our Core Pillar",
  description:
    "Our platform is built with farmers at the center. We provide tools that bridge knowledge gaps, reduce dependency on middlemen, and unlock access to critical services — from weather forecasting to financial literacy.",
  ctaText: "Learn More",
  ctaHref: "#about",
  features: [
    { icon: Store, label: "Direct Market Access" },
    { icon: Cpu, label: "AI-Powered Insights" },
    { icon: Beef, label: "Livestock Trading" },
    { icon: Stethoscope, label: "Disease Prediction" },
    { icon: Wallet, label: "Financial Tools" },
    { icon: CloudSun, label: "Weather Forecasting" },
  ],
};

export const getStarted = {
  headline: {
    main: "Ready to make an impact?",
    sub: "Partner with us today.",
  },
  features: [
    {
      title: "Purpose-Driven",
      description: "Every solution designed to create real-world impact.",
      icon: Target,
    },
    {
      title: "Accessible",
      description: "Technology that reaches underserved communities.",
      icon: HeartHandshake,
    },
    {
      title: "AI-Powered",
      description: "Intelligent platforms that learn and adapt with you.",
      icon: Brain,
    },
    {
      title: "Expert Team",
      description: "15+ years of enterprise, fintech & agritech expertise.",
      icon: BadgeCheck,
    },
  ],
  cta: { label: "Get in Touch", href: "#contact" },
};

export const footer = {
  tagline: "Technology for impact.",
  linkColumns: [
    [
      { label: "FarmerApp", href: "/farmerapp/privacy-policy" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms and Conditions", href: "#terms" },
      { label: "Data Protection", href: "#data-protection" },
    ],
  ],
  contact: {
    phone: "+91 8087080072",
    email: "support@metamersist.com",
  },
  copyright: "Made with purpose by MetaMersist Technologies Pvt. Ltd.",
};
