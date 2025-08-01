# replit.md

## Overview

This is a professional portfolio website for Rahul Shukla, a Senior QA Engineer with 10+ years of experience. The application is built as a full-stack web application featuring a React frontend and Express.js backend, designed to showcase professional experience, skills, projects, and provide a contact form for potential employers or clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming support (light/dark mode)
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Icons**: Lucide React icons with React Icons for brand icons

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with JSON endpoints
- **Request Handling**: Express middleware for JSON parsing and URL encoding
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging middleware for API endpoints
- **Development Setup**: Vite integration for hot module replacement in development

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development/testing
- **Type Safety**: Zod schemas for runtime validation and type inference

### Development & Build System
- **Build Tool**: Vite for frontend bundling with React plugin
- **Backend Build**: ESBuild for server-side bundling to ESM format
- **TypeScript**: Strict TypeScript configuration with path mapping
- **Module System**: ESM modules throughout the application
- **Development**: Hot reload for both frontend and backend
- **Replit Integration**: Cartographer plugin and runtime error overlay for Replit environment

### Code Organization
- **Monorepo Structure**: Shared schema and types between client and server
- **Client Directory**: Contains React application source code
- **Server Directory**: Contains Express.js backend code
- **Shared Directory**: Common TypeScript definitions and Drizzle schemas
- **Component Structure**: Organized UI components with separation of concerns
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)

## External Dependencies

### Database & Storage
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Radix UI**: Accessible React component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for UI icons
- **React Icons**: Additional icon library for brand/social icons
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **Vite**: Frontend build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type system for JavaScript
- **PostCSS**: CSS processing with Autoprefixer

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form library with validation
- **Zod**: Schema validation library
- **date-fns**: Date utility library

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Replit environment integration