# Cloudflare Pages Deployment Guide

This project is configured for deployment to Cloudflare Pages.

## Prerequisites

For manual deployment:
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
- `next.config.mjs` - Next.js static export configuration
- Build scripts in `package.json`
- Cloudflare Pages build settings (configured in dashboard)

## Build Process

The Next.js app is configured for static export with:
- `output: 'export'` - Generates static HTML files
- `trailingSlash: true` - Ensures proper routing
- `images: { unoptimized: true }` - Disables Next.js image optimization for static export
- Output directory: `./out`

## Deployment Options

### Option 1: Cloudflare Dashboard (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: Leave empty (or set to repository root)

### Option 2: Manual Deployment via CLI (Static Assets)
```bash
# Build the static site
npm run build

# Deploy to Cloudflare using wrangler.toml config
npm run deploy
```

### Option 3: Manual Deployment via Pages CLI
```bash
# Build and deploy directly to Pages
npm run build
npm run deploy:pages
```

### Option 4: Preview Deployment
```bash
# Build and deploy to preview environment
npm run build
npm run deploy:preview
```

## Cloudflare Pages Build Settings

In your Cloudflare Pages dashboard, configure:

**Framework preset**: Next.js (Static HTML Export)
**Build command**: `npm run build`
**Build output directory**: `out`
**Root directory**: (leave empty)
**Node.js version**: 18 or later

## Configuration Files

### wrangler.jsonc
```jsonc
{
  "name": "aizonlabs-landing",
  "compatibility_date": "2025-06-12",
  "assets": {
    "directory": "./out"
  }
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

### For Dashboard Deployment:
- [ ] Build completes successfully (`npm run build`)
- [ ] Static files generated in `./out` directory
- [ ] GitHub repository connected to Cloudflare Pages
- [ ] Build settings configured in Cloudflare dashboard
- [ ] Deploy via push to main branch

### For CLI Deployment:
- [ ] Build completes successfully (`npm run build`)
- [ ] Static files generated in `./out` directory
- [ ] Wrangler CLI installed and authenticated
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