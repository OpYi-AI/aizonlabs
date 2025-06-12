# Cloudflare Pages Deployment Guide

This project is configured for deployment to Cloudflare Pages using Wrangler.

## Prerequisites

1. Install Wrangler CLI globally:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

## Deployment Configuration

The project includes:
- `wrangler.jsonc` - Cloudflare deployment configuration
- `next.config.mjs` - Next.js static export configuration
- Build scripts in `package.json`

## Build Process

The Next.js app is configured for static export with:
- `output: 'export'` - Generates static HTML files
- `trailingSlash: true` - Ensures proper routing
- `images: { unoptimized: true }` - Disables Next.js image optimization for static export
- Output directory: `./out`

## Deployment Commands

### Production Deployment
```bash
# Build the static site
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

### Preview Deployment
```bash
# Build and deploy to preview environment
npm run build
npm run deploy:preview
```

### Manual Deployment
```bash
# Alternative: Deploy directly with wrangler pages
npx wrangler pages deploy ./out
```

## Configuration Files

### wrangler.jsonc
```jsonc
{
  "name": "aizonlabs-landing",
  "compatibility_date": "2025-06-12",
  "pages_build_output_dir": "./out"
}
```

### next.config.mjs
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};
```

## Build Output

After running `npm run build`, the `./out` directory contains:
- Static HTML files for all pages
- CSS and JavaScript bundles
- Public assets (images, icons, etc.)
- All necessary files for static hosting

## Deployment Checklist

- [ ] Build completes successfully (`npm run build`)
- [ ] Static files generated in `./out` directory
- [ ] Wrangler CLI installed and authenticated
- [ ] Project name updated in `wrangler.jsonc` if needed
- [ ] Deploy with `npm run deploy`

## Troubleshooting

### Common Issues:
1. **Build fails**: Check TypeScript errors with `npx tsc --noEmit`
2. **Missing files**: Ensure all imports are correct and files exist
3. **Authentication**: Run `wrangler login` if deployment fails
4. **Name conflicts**: Update project name in `wrangler.jsonc`

### Environment Variables
For production deployment, set environment variables in Cloudflare dashboard:
- Supabase keys (if using database features)
- Cal.com configuration
- Any other API keys

## Performance Optimizations

The static export includes:
- Pre-rendered HTML for all pages
- Optimized CSS and JS bundles
- Compressed assets
- Next.js automatic optimizations