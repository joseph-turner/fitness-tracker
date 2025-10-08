# fitness-tracker

A fitness tracking application built with Turborepo, TypeScript, Express, MongoDB, and React.

## What's Inside?

This Turborepo includes the following packages and apps:

### Apps

- `api`: Express + MongoDB + TypeScript API server
- `web`: Next.js web application
- `docs`: Next.js documentation site

### Packages

- `@fitness/types`: Shared TypeScript type definitions
- `@fitness/utils`: Shared utility functions
- `@fitness/ui`: React component library
- `@fitness/eslint-config`: ESLint configurations
- `@fitness/typescript-config`: TypeScript configurations

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10.8.2
- MongoDB (for API)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joseph-turner/fitness-tracker.git
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
```

4. Update the `.env` files with your configuration.

### Development

Run all apps in development mode:
```bash
npm run dev
```

Run a specific app:
```bash
npm run dev --filter=api
npm run dev --filter=web
npm run dev --filter=docs
```

### Building

Build all apps and packages:
```bash
npm run build
```

Build a specific app:
```bash
npm run build --filter=api
npm run build --filter=web
```

### Linting

Lint all apps and packages:
```bash
npm run lint
```

Format code with Prettier:
```bash
npm run format
```

### Type Checking

Check types across all apps and packages:
```bash
npm run check-types
```

## Project Structure

```
fitness-tracker/
├── apps/
│   ├── api/          # Express API server
│   ├── docs/         # Documentation site
│   └── web/          # Main web application
├── packages/
│   ├── eslint-config/    # Shared ESLint config
│   ├── typescript-config/ # Shared TypeScript config
│   ├── types/        # Shared types
│   ├── ui/           # Shared UI components
│   └── utils/        # Shared utilities
├── .husky/           # Git hooks
├── turbo.json        # Turborepo configuration
└── package.json      # Root package.json
```

## Technologies

- **Monorepo**: Turborepo
- **Language**: TypeScript
- **API**: Express.js + MongoDB
- **Frontend**: Next.js + React
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Package Manager**: npm

## Path Aliases

This project uses the `@fitness/*` namespace for internal packages:

- `@fitness/types` - Type definitions
- `@fitness/utils` - Utility functions
- `@fitness/ui` - UI components
- `@fitness/eslint-config` - ESLint configurations
- `@fitness/typescript-config` - TypeScript configurations

## Git Hooks

This project uses Husky for git hooks:

- **pre-commit**: Runs lint-staged to lint and format staged files

## Learn More

- [Turborepo Documentation](https://turborepo.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

