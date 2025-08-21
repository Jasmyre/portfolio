# Codebase Structure

The portfolio project follows a Next.js App Router structure with additional organization for components, utilities, and server logic.

## Top-level Structure
```
├── prisma/          - Database schema and migrations
├── public/          - Static assets (images, icons)
├── src/             - Application source code
├── .clinerules      - Branch/commit conventions
├── .env.example     - Environment variables template
├── next.config.js   - Next.js configuration
├── package.json     - Dependencies and scripts
├── tsconfig.json    - TypeScript configuration
└── doc/             - Project documentation
```

## Source Code (src/)
```
src/
├── app/             - App router directory
│   ├── layout.tsx   - Root layout
│   ├── page.tsx     - Home page
│   └── api/         - API routes
│       └── trpc/    - tRPC endpoint
├── components/      - Reusable UI components
│   ├── ui/          - Shadcn/ui components
│   ├── header.tsx   - Site header
│   └── footer.tsx   - Site footer
├── hooks/           - Custom React hooks
├── lib/             - Utility functions
├── server/          - Server-side code
│   ├── db.ts        - Database connection
│   └── api/         - API routers
├── styles/          - Global CSS
└── trpc/            - tRPC client setup
```

## Key Files
1. `src/app/layout.tsx` - Root layout with theme provider
2. `src/components/ui/` - Customized shadcn/ui components
3. `src/server/api/routers/` - tRPC routers for API endpoints
4. `prisma/schema.prisma` - Database schema definition
5. `src/env.js` - Environment variable validation

## Architecture Principles
- Component-based UI with atomic design
- Type-safe API with tRPC
- Server/client separation
- Theme-aware styling with Tailwind
