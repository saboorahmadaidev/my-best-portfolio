# Saboor Ahmad - AI Developer Portfolio

## Overview

This is a professional portfolio website for Saboor Ahmad, a Full Stack AI Developer, Machine Learning & Data Science specialist. The application is built as a single-page application (SPA) showcasing skills, projects, experience timeline, services, and contact information with a focus on futuristic minimal design with premium animations.

The project uses a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database (via Drizzle ORM). It features a dark-first design with light mode support, inspired by Linear, Vercel, and Apple's design philosophies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (single-page application)

**UI Component System**
- **shadcn/ui** component library (Radix UI primitives + Tailwind CSS)
- Component architecture follows the "New York" style variant
- All UI components are located in `client/src/components/ui/`
- Custom components built on top of shadcn in `client/src/components/`

**Styling Approach**
- **Tailwind CSS** for utility-first styling
- CSS variables for theming (supports dark/light modes)
- Custom design system with specific color palette, typography (Inter & JetBrains Mono), and spacing units
- Design guidelines reference Linear, Vercel, and Apple for premium minimal aesthetics

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local React state (useState, useContext) for UI state
- ThemeProvider context for dark/light mode theming

**Page Structure**
- Single-page layout with smooth scroll navigation between sections:
  - Hero/Landing section
  - About Me
  - Timeline/Experience
  - Projects showcase
  - Services offered
  - Social links
  - Contact form
  - AI Chatbot widget (fixed position)
  - Footer

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js
- ESM module format throughout the codebase
- TypeScript for type safety

**Development Setup**
- Vite middleware integration for HMR (Hot Module Replacement) in development
- Separate build process for production (client bundled by Vite, server by esbuild)
- Custom logging middleware for API request tracking

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Route registration system in `server/routes.ts`
- Error handling middleware with standardized JSON responses

**Storage Layer**
- Abstract storage interface (`IStorage`) defined in `server/storage.ts`
- In-memory implementation (`MemStorage`) for development/testing
- Designed to be swappable with database-backed implementation

### Data Storage Solutions

**Database Technology**
- **PostgreSQL** as the primary database (via Neon serverless driver)
- **Drizzle ORM** for type-safe database operations and schema management
- Schema definitions in `shared/schema.ts` using Drizzle's table builders

**Current Schema**
- `users` table with fields: id (UUID), username (unique), password
- Zod validation schemas generated from Drizzle schemas for runtime validation

**Migration Strategy**
- Drizzle Kit for schema migrations
- Migration files stored in `migrations/` directory
- `db:push` script for pushing schema changes to database

**Session Management**
- `connect-pg-simple` installed for PostgreSQL-backed session storage
- Session configuration not yet implemented in current codebase

### Authentication and Authorization

**Current State**
- User schema exists with username/password fields
- Storage interface includes user CRUD methods
- **No active authentication implementation** - appears to be scaffolding for future implementation

**Planned Approach** (based on dependencies)
- Password hashing (no bcrypt/argon2 visible, may need to be added)
- Session-based authentication using Express sessions with PostgreSQL store

### External Dependencies

**Third-Party Services & APIs**
- **OpenAI API** - Mentioned in chatbot component for AI-powered assistant (not yet implemented, uses mock responses)
- **Email Service** - Contact form exists but backend submission not implemented

**Font Services**
- **Google Fonts** - Loads Inter and JetBrains Mono font families

**Development Tools**
- **Replit-specific plugins** - Vite plugins for error overlay, cartographer, and dev banner (only in Replit environment)

**Icon Libraries**
- **Lucide React** - Primary icon library
- **React Icons** - Specifically `react-icons/si` for brand icons (Upwork, Discord, etc.)

**UI Component Primitives**
- **Radix UI** - Comprehensive set of unstyled accessible components (Accordion, Dialog, Dropdown, Select, Toast, etc.)

**Date Handling**
- **date-fns** - JavaScript date utility library

**Form Management**
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - Schema validation library integrated with Drizzle

**Animation/Carousel**
- **Embla Carousel** - Carousel component library
- **class-variance-authority (CVA)** - For managing component variants

**Deployment Platforms**
- Configured for deployment on **Vercel**, **AWS**, or similar Node.js hosting
- Database hosted on **Neon** (serverless PostgreSQL)