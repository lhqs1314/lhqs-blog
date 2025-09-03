# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal blog built with Next.js 15, React 19, MDX, and Tailwind CSS 4. The blog focuses on minimalist design with content-driven architecture, featuring code highlighting, math formulas, responsive design, and smooth page transitions.

## Development Commands

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Architecture

### Core Technologies
- **Next.js 15** with App Router, React Server Components, and ViewTransitions
- **MDX** for content with GitHub Flavored Markdown support
- **Shiki** for code highlighting with CSS variables theme
- **KaTeX** for math formula rendering
- **Tailwind CSS 4** for styling
- **TypeScript** throughout

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with navigation, fonts, and global styles
  - `page.mdx` - Homepage content
  - `thoughts/_articles/` - Blog post MDX files
  - `thoughts/[slug]/page.tsx` - Dynamic article pages
  - `projects/page.mdx` - Projects showcase
  - `visuals/page.tsx` - Visual portfolio
  - `guestbook/page.mdx` - Guestbook page
  - `api/articles/route.ts` - API for article metadata
- `components/` - Reusable UI components
  - `navbar.tsx` - Primary navigation
  - `secondary-navigation.tsx` - Context-aware secondary nav
  - `tweet-card.tsx`, `block-sidetitle.tsx` - MDX components
- `mdx-components.tsx` - Custom MDX component definitions

### Content System
- Articles are MDX files in `app/thoughts/_articles/`
- Each article can export metadata: `{ title, date }`
- API route `/api/articles` dynamically lists articles with metadata
- Custom MDX components include enhanced images, code blocks, math formulas

### Key Features
- **ViewTransitions** enabled in `next.config.ts` for smooth navigation
- **Code highlighting** via Shiki with CSS variables theme
- **Responsive layout** with three-column design (nav, secondary nav, content)
- **Custom fonts** loaded locally (Inter, Lora, Iosevka)
- **SEO optimized** with OpenGraph and Twitter meta tags

### Styling Conventions
- Uses custom Tailwind theme with "rurikon" color palette
- Responsive breakpoints: mobile (640px), sm, md, lg
- Font variables: `--sans`, `--serif`, `--mono`
- Consistent spacing and typography scales

### Development Notes
- MDX files support JSX components alongside markdown
- Images can be local (from `assets/images/`) or remote URLs
- Math formulas use KaTeX via `InlineMath` and `BlockMath` components
- All external links open in new tab with security attributes
- Vercel Analytics integrated for usage tracking