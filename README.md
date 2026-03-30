# FranceCasinoLegal.com

Casino affiliate website targeting French-speaking online casino players. Covers legality, regulations, game providers, payment methods, bonuses, and strategies.

**Live:** https://francecasinolegal.vercel.app
**Domain:** francecasinolegal.com (pending DNS)

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4
- **Hosting:** Vercel (auto-deploy from `main`)
- **Language:** 100% French content

## Site Architecture (47 routes)

### Core Pages (6)
| Route | Description |
|-------|-------------|
| `/` | Homepage — casino comparison, guides overview |
| `/legalite-regulations` | French gambling law, ANJ, offshore licenses |
| `/fournisseurs-logiciels` | Game provider reviews (Evolution, Pragmatic, etc.) |
| `/solutions-paiement` | Payment methods (crypto, cards, e-wallets) |
| `/types-de-bonus` | Bonus types and wagering conditions |
| `/blog` | Blog index — 20 articles with images |

### Sub-Pages (16)
| Section | Pages |
|---------|-------|
| Licenses (4) | ANJ France, MGA Malte, Curacao, Kahnawake |
| Providers (6) | Evolution Gaming, Pragmatic Play, NetEnt, Play'n GO, Microgaming, Yggdrasil |
| Bonus Types (6) | Bienvenue, Sans depot, Tours gratuits, Cashback, VIP, Rechargement |

### Blog Articles (20)
Casino fiable, Wagering, VPN, Crypto vs traditionnel, Roulette strategies, Live casino, Licences, Bankroll, RTP, Retraits, Blackjack, Mobile apps, Jackpots progressifs, Baccarat, Tournois, Addiction, Fiscalite, Volatilite, Jeux de table, Affiliation

## SEO Features

- Meta title (max 60 chars) + description (max 155 chars) on every page
- Open Graph + Twitter Card meta tags
- JSON-LD FAQ schema on all 36 pages with FAQs
- Dynamic `sitemap.xml` (all 45 routes)
- `robots.txt` allowing all crawlers
- Canonical URLs via `metadataBase`
- H1/H2/H3 semantic heading hierarchy
- Image placeholders with descriptive alt text
- `lang="fr"` on HTML root

## Content Requirements (per page)

Every page follows these guidelines:
- Minimum 600 words in native French
- Comparison table
- Pros & Cons section
- FAQ section (3-5 questions, `<details>`/`<summary>`)
- Image placeholders with SEO alt text
- Target keyword noted

## Components

| Component | Description |
|-----------|-------------|
| `Header` | Sticky nav with mobile hamburger menu |
| `Footer` | 3-column with links, legal info, 18+ warning |
| `Breadcrumb` | Navigation trail on all 36 sub-pages |
| `FaqSchema` | JSON-LD structured data for FAQ sections |

## Security Headers

Configured in `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint
```

## DNS Setup (Vercel)

Add these records at your registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |
