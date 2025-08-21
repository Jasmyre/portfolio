# Technologies Overview

This project leverages modern web technologies to create a performant, type-safe portfolio website.

## Core Technologies
1. **Next.js 15** - React framework for server-rendered applications
2. **React 19** - Frontend library for building UI components
3. **TypeScript** - Static typing for JavaScript
4. **Tailwind CSS** - Utility-first CSS framework
5. **shadcn/ui** - Accessible component library built on Radix UI

## Backend & API
- **tRPC** - Type-safe API layer between client and server
- **Prisma** - TypeScript ORM for database access
- **Zod** - Schema validation for runtime type safety
- **TanStack Query** - Data fetching and caching

## Styling & Animation
- **Tailwind CSS** - Core styling system
- **Framer Motion** - Animation library for React
- **class-variance-authority** - Class name utilities
- **tailwind-merge** - Merge Tailwind classes conditionally

## Development Tools
- **ESLint** - JavaScript/TypeScript linter
- **Prettier** - Code formatter
- **Prisma Studio** - Database GUI
- **tRPC DevTools** - API development tools

## Deployment
- **Vercel** - Serverless deployment platform
- **GitHub Actions** - CI/CD pipeline

## Technology Decisions
1. **T3 Stack** chosen for full-stack type safety
2. **Tailwind CSS** for rapid UI development
3. **shadcn/ui** for accessible, themeable components
4. **Prisma** for type-safe database access
5. **Vercel** for seamless Next.js deployment

## Version Information
```json
"dependencies": {
  "next": "^15.2.3",
  "react": "^19.0.0",
  "typescript": "^5.8.2",
  "tailwindcss": "^4.0.15",
  "prisma": "^6.5.0"
}
