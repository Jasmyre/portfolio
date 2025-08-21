# Best Practices

This document outlines coding conventions and development practices for the portfolio project.

## General Principles
1. **Type Safety**: Use TypeScript extensively for type safety
2. **Component Isolation**: Keep components focused and reusable
3. **Performance**: Optimize for fast loading (code splitting, image optimization)
4. **Accessibility**: Follow WCAG 2.1 guidelines

## Coding Conventions
### Naming
- Components: kebab-case (`header.tsx`)
- Hooks: camelCase prefixed with "use" (`useMobile.ts`)
- Files: kebab-case for non-component files (`env.js`)

### Styling
- Use Tailwind utility classes first
- For complex animations, use Framer Motion
- Prefer CSS variables for theme-specific values
- Avoid global CSS except in `globals.css`

### State Management
- Use React state for local component state
- Use tRPC + TanStack Query for server state
- Avoid global state management libraries unless necessary

### Error Handling
- Validate API inputs with Zod
- Use error boundaries for UI errors
- Log server errors to appropriate services

## Git Workflow
- Follow branch naming conventions from `.clinerules`
- Use conventional commits with semantic types
- Rebase feature branches before merging
- Squash merge for feature branches

## Testing
- Write unit tests for complex utilities
- Add Storybook stories for UI components
- Consider Cypress for critical path E2E testing

## Performance Optimization
- Use dynamic imports for heavy components
- Optimize images with Next.js Image component
- Implement code splitting for routes
- Use React.memo for expensive components
