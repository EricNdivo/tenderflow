<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TenderFlow Project Instructions

This is a React + TypeScript project called TenderFlow built with:

- **React 19** with TypeScript for the frontend framework
- **Vite** as the build tool and development server
- **Tailwind CSS** for utility-first styling
- **Supabase** for backend functionality and database integration

## Project Structure Guidelines

- Use TypeScript for all new files
- Follow React functional component patterns with hooks
- Use Tailwind CSS classes for styling instead of custom CSS
- Place utility functions in `src/lib/` directory
- Place components in `src/components/` directory
- Use Supabase client from `src/lib/supabase.ts` for database operations

## Coding Standards

- Use arrow functions for components
- Implement proper TypeScript typing
- Use async/await for asynchronous operations
- Follow React best practices for hooks and state management
- Use responsive design patterns with Tailwind CSS
- Implement proper error handling for Supabase operations

## Environment Setup

- Copy `.env.example` to `.env` and fill in your Supabase credentials
- Use VITE_ prefix for environment variables that need to be accessible in the client
