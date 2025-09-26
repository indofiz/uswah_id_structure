# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project using shadcn/ui components with Tailwind CSS. It's set up as a modern frontend application with a focus on component-based UI development.

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with CSS variables
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icon Library**: Lucide React
- **Linting**: ESLint with TypeScript support

## Key Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production (includes TypeScript compilation)
npm run preview      # Preview production build
npm run lint         # Run ESLint

# TypeScript compilation
npx tsc -b           # Type check (part of build process)
```

## Project Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components (Button, Card, Navigation, etc.)
│   ├── layout/        # Layout components (Navigation)
│   ├── navigation/    # Navigation-specific components (Navbar)
│   └── grid-background/  # Background effect components
├── section/           # Page sections (Hero, About, Products, etc.)
│   ├── hero/         # Multiple hero variants (hero-1 to hero-5)
│   ├── about/        # Company introduction components
│   ├── products/     # Products and services sections
│   ├── portfolio/    # Client portfolio section
│   ├── blog/         # Blog section components
│   └── footer/       # Footer components
├── template/         # Full page templates (template-1, template-2, etc.)
├── data/             # Data layer with provider pattern implementation
├── types/            # TypeScript type definitions
├── lib/              # Utility functions (utils.ts for cn helper)
├── assets/           # Static assets
├── App.tsx           # Main app component (renders Template2)
├── main.tsx          # React entry point
└── index.css         # Global styles with Tailwind imports
```

## Component System

- **shadcn/ui Integration**: Configured with multiple registries (@aceternity, @originui, @cult, @kibo, @reui)
- **Styling Approach**: Uses class-variance-authority (cva) for component variants
- **Utility Function**: `cn()` function combines clsx and tailwind-merge for conditional classes
- **Component Pattern**: Button component example shows the standard shadcn/ui pattern with Radix Slot support

## Configuration Files

- **components.json**: shadcn/ui configuration with path aliases and registry settings
- **vite.config.ts**: Vite configuration with path aliases (@/ → ./src/)
- **tsconfig.json**: TypeScript configuration with path mapping
- **eslint.config.js**: ESLint configuration for React and TypeScript

## Styling System

- **Tailwind CSS 4**: Uses the new CSS-first architecture
- **CSS Variables**: Comprehensive design system with light/dark mode support
- **Animation**: tw-animate-css for additional animations
- **Theme**: New York style with neutral base colors and custom radius values

## Architecture Patterns

- **Template-Based Architecture**: Full page layouts are organized as reusable templates (Template2 is currently active)
- **Section-Based Components**: Pages are composed of discrete sections (Hero, About, Products, Portfolio, Blog, Footer)
- **Data Provider Pattern**: Uses factory pattern with provider interfaces for data management (ProductDataProvider, BlogDataProvider, PartnerDataProvider)
- **Type Safety**: Comprehensive TypeScript interfaces following Interface Segregation Principle
- **Component Variants**: Multiple variants for similar components (5 different hero sections available)

## Data Layer

The project implements a clean data architecture with:
- **Provider Pattern**: `DataProviderFactory` creates specific data providers
- **Interface Segregation**: Separate interfaces for different data types (Product, BlogPost, Partner)
- **Type Definitions**: All data structures defined in `src/types/index.ts`
- **Mock Data**: Static data in `src/data/index.ts` for development and prototyping

## Development Notes

- Uses TypeScript strict mode with proper path mapping
- ESLint configured for React hooks and refresh
- Vite HMR for fast development
- All components use forwardRef pattern when applicable
- shadcn/ui components follow accessibility best practices with Radix UI
- Template system allows easy switching between different page layouts