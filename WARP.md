# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 dashboard application built with modern tooling and best practices. The project uses:

- **Next.js 15** with App Router and Turbopack for fast development
- **React 19** with TypeScript for type safety
- **Tailwind CSS v4** for styling with custom design system
- **Biome** for linting, formatting, and code quality
- **shadcn/ui** component system (configured but components not yet added)
- **Lucide React** for icons

## Development Commands

### Core Development
```bash
# Start development server with Turbopack (fastest)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start
```

### Code Quality
```bash
# Run linter and check code quality
npm run lint

# Format code automatically
npm run format
```

### Package Management
```bash
# Install dependencies
npm install

# Add new dependencies
npm install <package-name>

# Add development dependencies
npm install -D <package-name>
```

## Architecture & Structure

### File Organization
- **`app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global styling
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and design tokens
- **`lib/`** - Shared utilities and helpers
  - `utils.ts` - Class name merging utility (cn function for Tailwind)
- **`public/`** - Static assets (SVG icons, images)

### Design System
The project uses a comprehensive design system built on Tailwind CSS v4 with:
- **CSS Custom Properties** for theming (light/dark mode support)
- **OKLCH color space** for better color consistency
- **Design tokens** for spacing, colors, and typography
- **Component variants** ready for shadcn/ui integration

### Key Configuration Files
- **`biome.json`** - Biome configuration for linting/formatting with Next.js and React rules
- **`components.json`** - shadcn/ui configuration (New York style, CSS variables enabled)
- **`tsconfig.json`** - TypeScript configuration with path aliases (`@/*` maps to root)
- **`next.config.ts`** - Next.js configuration (currently minimal)
- **`postcss.config.mjs`** - PostCSS configuration for Tailwind CSS v4

### Styling Approach
- Uses Tailwind CSS v4 with modern features like `@theme inline`
- Custom variant system for dark mode: `@custom-variant dark (&:is(.dark *))`
- Comprehensive color palette using OKLCH for better color accuracy
- CSS variables for dynamic theming
- Integration with `tw-animate-css` for animations

### TypeScript Configuration
- Strict TypeScript configuration enabled
- Path aliases configured (`@/` prefix for imports)
- Next.js TypeScript plugin integrated
- Automatic type generation for routes

## Development Workflows

### Adding New Components
When adding shadcn/ui components:
```bash
# Use npx to add shadcn/ui components
npx shadcn@latest add <component-name>
```
Components will be added to `@/components/ui/` and can use the pre-configured design system.

### Code Quality Standards
- **Biome** handles all linting and formatting (replaces ESLint + Prettier)
- 2-space indentation enforced
- Import organization automatic on save
- Git integration enabled for pre-commit hooks
- Unknown CSS at-rules disabled for Tailwind compatibility

### Working with Fonts
The project uses Geist fonts (Sans and Mono) optimized through `next/font/google`:
- CSS variables: `--font-geist-sans` and `--font-geist-mono`
- Applied globally through the root layout

### Dark Mode Implementation
Dark mode is implemented through CSS class switching:
- Toggle `.dark` class on document root
- All color tokens automatically switch via CSS variables
- Comprehensive dark mode color palette defined

## Important Notes

- **Turbopack** is enabled by default for faster development builds
- Uses **App Router** architecture (not Pages Router)
- **React Server Components** enabled by default
- **Tailwind CSS v4** (latest) with new syntax and features
- Path aliases use `@/` prefix for cleaner imports
- Design system is comprehensive but components need to be added as needed
