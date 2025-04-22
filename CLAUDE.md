# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Test Commands
- Build: `npm run build` or `yarn build`  
- Dev: `npm run dev` or `yarn dev` (using turbopack)
- Start: `npm run start` or `yarn start`
- Lint: `npm run lint` or `yarn lint`

## Code Style Guidelines
- **Formatting**: Use ESLint with Next.js configuration
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Imports**: Group imports: 1) external packages, 2) internal modules, 3) relative imports
- **Types**: Use TypeScript with explicit types for props and return values
- **Components**: Use functional components with proper TypeScript interfaces
- **CSS**: Use Tailwind CSS with proper class organization
- **State Management**: Use React hooks (useState, useEffect) appropriately
- **Error Handling**: Use try/catch blocks with specific error types
- **Animations**: Prefer framer-motion for animations when possible