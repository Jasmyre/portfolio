# Development Guide

## Prerequisites
- Node.js v20+
- npm v11.4.1+
- PostgreSQL (for database features)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Jasmyre/portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in required values (database URL, etc.)

## Development Workflow
### Starting the development server
```bash
npm run dev
```

### Building for production
```bash
npm run build
```

### Linting and formatting
```bash
# Check formatting
npm run format:check

# Fix formatting issues
npm run format:write

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Database Operations
### Generate Prisma client
```bash
npm run db:generate
```

### Run database migrations
```bash
npm run db:migrate
```

### Open Prisma Studio
```bash
npm run db:studio
```

### Push schema to database
```bash
npm run db:push
```

## Testing
```bash
# Type checking
npm run typecheck

# Full check (linting + type checking)
npm run check
```

## Deployment
The project is configured for Vercel deployment. Push to the `main` branch to trigger automatic deployment.
