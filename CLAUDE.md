# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Astro.js and Sanity CMS, deployed to Cloudflare Pages as a static site. The project consists of two main parts:

1. **Astro Frontend** (`/`) - Static site generator with React components
2. **Sanity Studio** (`/studio/`) - Headless CMS for content management

## Development Commands

### Frontend (Astro)
- `npm run dev` - Start Astro development server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

### Sanity Studio
Run these commands from the `/studio/` directory:
- `npm run dev` - Start Sanity Studio development server
- `npm run build` - Build Sanity Studio for production
- `npm run deploy` - Deploy Sanity Studio to Sanity hosting

## Architecture

### Content Management Strategy
The site uses **singleton documents** for pages (Home, About, Contact) rather than document collections. These are configured in `studio/structure.js` using:
```js
S.document().schemaType("pageHome").documentId("pageHome")
```

This approach ensures each page has exactly one content instance with a predictable ID for querying.

### Sanity Configuration
- **Project ID**: `4wsnsase`
- **Dataset**: `production` 
- **Studio Path**: `/admin` (accessed at yoursite.com/admin)
- **CDN**: Disabled for real-time content updates

### Content Schema Types
Core schema types are defined in `studio/schemaTypes/`:
- `pageHome`, `pageAbout`, `pageContact` - Singleton page content
- `project`, `blogPost` - Collection content types
- `projectTag`, `blogTag` - Taxonomy/categorization
- `settings` - Global site settings
- `sanityImage` - Custom image schema with alt text and metadata

### Image Handling
Images are handled through a custom `SanityImage.astro` component that:
- Uses Sanity's image transformation API via `urlFor()` helper
- Automatically optimizes images with `.auto('format')`
- Integrates with Astro's native `<Image>` component
- Preserves aspect ratios from Sanity metadata

### Data Fetching
Content is fetched using `sanityClient.fetch()` with GROQ queries:
- Import client: `import { sanityClient } from "sanity:client"`
- Use `imageQuery` from `lib/sanity-queries.js` for consistent image data fetching
- Query singleton pages: `*[_type == "pageHome"][0]`

### Styling Architecture  
Modular CSS approach with separate files in `src/styles/`:
- `base.css` - Reset and base styles
- `typography.css` - Font and text styles  
- `spacing.css` - Margins, padding, layout
- `color.css` - Color system
- `animation.css` - Transitions and animations
- `input.css` - Form controls

All styles are imported in `LayoutGlobal.astro` for global availability.

### Deployment
- **Target**: Cloudflare Pages (static output)
- **Image Service**: Cloudflare Images
- **Platform Proxy**: Enabled for local development

## Key Integrations

- `@sanity/astro` - Connects Astro with Sanity CMS
- `@astrojs/react` - React component support
- `@astrojs/cloudflare` - Cloudflare Pages adapter with static output
- `@sanity/image-url` - Image URL generation and transformation