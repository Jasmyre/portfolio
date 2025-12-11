import { Code2, Database, Globe, Palette, Smartphone, Zap } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ElementType;
  highlights: string[];
  deliverables: string[];
  technologies: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Beautiful, user-centric designs that balance aesthetics with functionality. I create interfaces that engage and convert.",
    longDescription:
      "I create stunning, user-centric web designs that combine aesthetic appeal with practical functionality. From wireframes to high-fidelity mockups, I ensure every element serves a purpose while maintaining visual harmony. My designs are responsive, accessible, and optimized for conversion.",
    icon: Palette,
    highlights: [
      "Responsive design approach",
      "User-centric methodology",
      "Accessibility-first thinking",
      "Modern design trends",
    ],
    deliverables: [
      "UI/UX mockups",
      "Wireframes",
      "Design system",
      "Interactive prototypes",
    ],
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications using modern frameworks like React, Next.js, and TypeScript.",
    longDescription:
      "I build fast, responsive frontend applications using cutting-edge technologies and best practices. Whether it's a static site or a complex interactive application, I ensure clean code, optimal performance, and exceptional user experience across all devices.",
    icon: Code2,
    highlights: [
      "React & Next.js expertise",
      "TypeScript implementation",
      "Performance optimization",
      "SEO-friendly structure",
    ],
    deliverables: [
      "Responsive web apps",
      "Component libraries",
      "Performance audits",
      "Interactive UI",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "End-to-end development solutions combining frontend expertise with backend architecture and database design.",
    longDescription:
      "I deliver complete full-stack solutions from frontend to backend, handling everything from API design to database architecture. My approach ensures scalable, secure applications with seamless integration between all layers.",
    icon: Globe,
    highlights: [
      "Complete project ownership",
      "Scalable architecture",
      "Security best practices",
      "Real-time functionality",
    ],
    deliverables: [
      "Full web applications",
      "REST APIs",
      "Database design",
      "Authentication systems",
    ],
    technologies: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Neon.tech",
      "Prisma",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing web applications for speed, accessibility, and SEO. Every millisecond matters.",
    longDescription:
      "I optimize websites for speed, accessibility, and search engine visibility. Through code analysis, image optimization, and strategic caching, I ensure your application performs at peak efficiency.",
    icon: Zap,
    highlights: [
      "Core Web Vitals optimization",
      "Accessibility audits (WCAG)",
      "SEO enhancement",
      "Code splitting & lazy loading",
    ],
    deliverables: [
      "Performance reports",
      "Optimization recommendations",
      "Implementation support",
    ],
    technologies: ["Lighthouse", "WebPageTest", "Chrome DevTools", "Webpack"],
  },
  {
    id: 5,
    title: "Responsive Mobile Design",
    description:
      "Crafting seamless experiences across all devices. Your site looks stunning on phones, tablets, and desktops.",
    longDescription:
      "Every project I build is mobile-first by design. I ensure seamless, intuitive experiences across all screen sizes, from smartphones to large displays, with thoughtful touch interactions and optimized performance.",
    icon: Smartphone,
    highlights: [
      "Mobile-first approach",
      "Touch-friendly interactions",
      "Screen size optimization",
      "Cross-browser compatibility",
    ],
    deliverables: [
      "Mobile-optimized sites",
      "Responsive frameworks",
      "Touch gesture support",
    ],
    technologies: [
      "CSS Grid",
      "Flexbox",
      "Tailwind CSS",
      "Mobile viewport optimization",
    ],
  },
  {
    id: 6,
    title: "Database Architecture",
    description:
      "Designing scalable database solutions with proper indexing, relationships, and optimization strategies.",
    longDescription:
      "I design robust, scalable database architectures that grow with your application. From schema design to query optimization, I ensure your data is organized efficiently and securely.",
    icon: Database,
    highlights: [
      "Relational database design",
      "Query optimization",
      "Indexing strategies",
      "Data security & backup",
    ],
    deliverables: [
      "Database schema",
      "Optimization queries",
      "Migration scripts",
      "Backup strategies",
    ],
    technologies: [
      "PostgreSQL",
      "Neon.tech",
      "Prisma ORM",
      "SQL",
      "Row Level Security",
    ],
  },
];
