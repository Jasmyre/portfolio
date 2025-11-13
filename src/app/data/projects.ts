export interface Project {
  id: string;
  title: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  year: string;
  status: "completed" | "in-progress" | "archived";
  githubUrl?: string;
  liveUrl?: string;
  stats: {
    users?: number;
    performance?: number;
    codeQuality?: number;
    features?: number;
  };
  highlights: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ICTQuest",
    longDescription:
      "ICTQuest is an educational website designed to help learners practice coding concepts through interactive activities. The platform includes features like an arrange component exercise and multiple-choice quizzes that reinforce key topics. Its content is structured into groups, starting with HTML basics and moving toward more advanced elements such as forms and tables. The lessons are presented in a clear format that allows users to actively engage with the material rather than just reading about it. The overall focus is on making the learning process approachable and practical for beginners and intermediate learners.",
    image: "/banner/ictquest.png",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Neon.tech",
      "Prisma",
      "OAuth",
      "Tailwind",
      "Shadcn ui",
    ],
    category: "Web Application",
    year: "2025",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/ictquest",
    liveUrl: "https://ictquest.vercel.app",
    stats: {
      performance: 88,
      codeQuality: 94,
      features: 6,
    },
    highlights: [
      "Interactive lesson",
      "Track progress",
      "Socialize with other users",
      "Save data with accounts",
    ],
    challenges: ["Limited development deadline"],
  },
  {
    id: "2",
    title: "FateShaper",
    longDescription:
      "This game is a next-level spin on the classic rock-paper-scissors. It's not just about picking rock, paper, or scissors—there's an entire RPG-style system working behind the scenes. You'll need to manage stats like strength, precision, crit, speed, fatigue, and momentum, which all affect every move in combat. This makes each battle more strategic, dynamic, and unpredictable.",
    image: "/banner/fateshaper.png",
    technologies: ["Vite", "Typescript", "Tailwind"],
    category: "Game dev",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/fateshaper",
    liveUrl: "https://fateshaper.vercel.app",
    stats: {
      users: 10,
      performance: 91,
      codeQuality: 89,
      features: 1,
    },
    highlights: ["Challenging gameplay"],
    challenges: [],
  },
  {
    id: "3",
    title: "Search4Movies",
    longDescription:
      "Search4Movies is a website that lets users quickly look up movies and explore essential details about them. It provides information such as release year, genre, cast, and summaries in a simple, easy-to-read format. The site is designed for straightforward browsing without unnecessary clutter. Users can type in a movie title to find relevant results or discover related films through connected data. Its focus is on delivering clear movie information in an organized and accessible way.",
    image: "/banner/search4movies.png",
    technologies: ["React", "Next.js", "TMDB API", "Tailwind", "Javascript"],
    category: "Web Application",
    year: "2024",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/search4movies",
    liveUrl: "https://search4movies.vercel.app",
    stats: {
      users: 10,
      performance: 91,
      codeQuality: 89,
      features: 1,
    },
    highlights: ["Search for any movies"],
    challenges: [],
  },
  {
    id: "4",
    title: "BlissBrew",
    longDescription:
      "BlissBrew is a personal project showcasing a static single-page web design created for a coffee shop. The design focuses on a calm and inviting atmosphere, reflecting the cozy vibe of a café setting. It features sections for the shop’s menu, specials, and general information without complex functionality. The layout emphasizes clean typography, warm colors, and an organized structure to give visitors a smooth browsing experience. As a design project, its goal is to capture the essence of a coffee shop through visual presentation rather than interactive features.",
    image: "/banner/blissbrew.png",
    technologies: ["React", "Tailwind", "Next.js"],
    category: "Web Design",
    year: "2023",
    status: "completed",
    githubUrl: "https://github.com/Jasmyre/blissbrew",
    liveUrl: "https://blissbrew.vercel.app",
    stats: {
      performance: 96,
      codeQuality: 95,
      features: 0,
    },
    highlights: ["Specialized design vibe"],
    challenges: [],
  },
];
