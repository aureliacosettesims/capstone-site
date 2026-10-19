# Aurelia Cosette Sims — Portfolio Website

A clean, minimalist, high-performance visual arts portfolio website built with **Astro**, **Tailwind CSS**, and **Sveltia CMS / Decap CMS**, engineered for deployment on **Cloudflare Pages**.

---

## 🎨 Artist Identity & Scope

- **Artist**: Aurelia Cosette Sims
- **Profession**: Craft Artisan & Visual Artist
- **Institution**: Northern Arizona University (Technical Theater & Sculpture)
- **Studio Focus**: Costume crafts, puppetry fabrication, printmaking, welding, woodworking, and traditional arts.
- **Aesthetic**: Editorial, typography-focused, generous whitespace, gallery-first layout. Default warm neutral paper tone (`#FAF8F5`) with Cormorant Garamond serif headings and crisp Inter sans body typography.

---

## 📂 Site Architecture

1. **Header & Navigation**:
   - Left: *Aurelia Cosette Sims* with subtitle *Craft Artisan & Visual Artist*.
   - Right: Navigation links to **Work / Gallery**, **Resume**, and **About**, plus a direct PDF resume shortcut.
   - Mobile: Fully responsive drawer navigation with smooth slide-in, accessible toggle, and backdrop blur.

2. **Homepage / Work Gallery (`/`)**:
   - Category filter tabs with live counters:
     - `All` (25 works)
     - `Costume Crafts` (*Lysistrata*, *BUZZ*)
     - `Printmaking` (*Through The Eyes of The Prey*, *Pigeon*, *We're All Creatures*, *Mallard*)
     - `Puppetry` (*Vincent Van Goat*, *King*, *Ghost*, *Mallard*, *Audrey II*, *Goose*)
     - `Sculpture` (*Stripped Tunnel*, *Pumpkin Cat*, *Steeling The Old Masters*, *Untitled*, *Flashlight?*, etc.)
     - `Traditional Painting & Drawing` (*India Ink*, *Acrylic*, *Pencil*, *Line Study*, *Color Study*, *Grid Study*)
   - Instant client-side filtering with URL parameter synchronization (`?category=puppetry`).
   - Responsive masonry-style card grid featuring cover images, titles, categories, and mediums.

3. **Dedicated Project Pages (`/work/[slug]`)**:
   - Editorial layout with category breadcrumbs.
   - High-resolution hero image with click-to-enlarge functionality.
   - Additional photo grid / process views for multi-image projects.
   - Interactive full-screen **Lightbox Modal** with previous/next controls, keyboard arrow navigation, and ESC to close.
   - Materials & techniques chips.
   - Artist statements and fabrication narratives.
   - Previous & Next project navigation cards.

4. **Resume Page (`/resume`)**:
   - Prominent **"Download PDF Resume"** button linked directly to `/AureliaS.resume.pdf`.
   - Structured chronological table of theatrical fabrication credits (2025, 2024, 2023) detailing Role, Production, Year, and Venue/Company (NAU).
   - Technical fabrication skills categorized by discipline (Woodworking, Welding, Puppet Construction, Ceramics & Casting, Printmaking, Costume Crafts, Model Making).
   - Academic profile at Northern Arizona University.

5. **About Page (`/about`)**:
   - Split layout: High-resolution artist portrait on the left; biography, core disciplines, and quote on the right.
   - Direct contact link (`aurelia.c.sims@gmail.com`) with a one-click "Copy Email" button.
   - Location (Flagstaff, Arizona) and Instagram link.

6. **Content Management System (`/admin`)**:
   - Integrated **Sveltia CMS** (modern drop-in replacement for Decap CMS) reading from `admin/config.yml`.
   - Collections for:
     - **Projects** (Markdown with YAML frontmatter in `src/content/projects/`)
     - **Resume & Credits** (JSON in `src/data/resume.json`)
     - **About Page** (JSON in `src/data/about.json`)
   - Local backend enabled for testing CMS edits locally without pushing to GitHub.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (Node 20 or 22 recommended)
- npm or pnpm

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for production
```bash
npm run build
```
This generates static files into the `dist/` directory in under 1 second.

### 4. Preview the production build locally
```bash
npm run preview
```

---

## ☁️ Deployment on Cloudflare Pages

This portfolio generates 100% static HTML, CSS, images, and JavaScript, making it natively compatible with Cloudflare Pages at zero cost and blazing speed.

### Option A: Connect via Git (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variable**: Add `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Cloudflare Pages will build and deploy the site globally across 300+ edge data centers.

### Option B: Deploy via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name aurelia-portfolio
```

---

## 📝 Content Management via CMS (`/admin`)

The CMS is connected directly to your GitHub repository using your dedicated **Cloudflare Worker OAuth** backend:
- **Repository**: `aureliacosettesims/capstone-site`
- **OAuth Worker URL**: `https://capstone-auth.aurelia-c-sims.workers.dev`
- **Auth Endpoint**: `/auth`

### Production CMS Access:
1. Navigate to `https://aureliacosettesims.com/admin` (or `https://<your-cloudflare-pages-url>/admin`).
2. Click **"Login with GitHub"**.
3. Authorize via your Cloudflare OAuth Worker to manage content directly on the `main` branch.

### Local CMS Development:
During local development, `local_backend: true` is enabled in `config.yml`. You can run:
```bash
npx @sveltia/cms-server
```
and visit `http://localhost:4321/admin` to edit markdown and JSON files locally with live file system synchronization.

---

## 📁 Directory Structure

```text
├── dist/                     # Static production build output (for Cloudflare Pages)
├── public/
│   ├── admin/
│   │   ├── config.yml        # CMS collections configuration
│   │   └── index.html        # Sveltia CMS single-page app
│   ├── images/
│   │   ├── about/            # Artist portrait
│   │   └── projects/         # High-resolution project webp images
│   ├── _headers              # Cloudflare Pages caching and security headers
│   ├── AureliaS.resume.pdf   # Downloadable PDF resume
│   └── favicon.svg           # Monogram craft favicon
├── src/
│   ├── components/
│   │   ├── Footer.astro      # Global site footer
│   │   ├── Header.astro      # Sticky navigation & mobile drawer
│   │   ├── Lightbox.astro    # Accessible fullscreen image preview modal
│   │   └── ProjectCard.astro # Project card with hover animations
│   ├── content/
│   │   └── projects/         # 25 project Markdown files with frontmatter
│   ├── data/
│   │   ├── about.json        # Bio copy, contact info, core disciplines
│   │   └── resume.json       # Chronological theatrical credits and skills
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base HTML layout with SEO & typography
│   ├── pages/
│   │   ├── 404.astro         # 404 not found page
│   │   ├── about.astro       # Split-layout about page
│   │   ├── index.astro       # Work gallery with category tabs
│   │   ├── resume.astro      # Theatrical credits & skills page
│   │   └── work/[slug].astro # Dedicated project detail page
│   └── content.config.ts     # Astro content collection schema
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS theme & typography tokens
└── package.json              # Project dependencies and scripts
```
