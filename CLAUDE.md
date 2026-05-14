# Waardewerk Site — CLAUDE.md
Projectcontext voor Claude Code. Lees dit bij elke sessie.
---
## Project
**Waardewerk** (handelsnaam van Let's Be Well BV, KvK 95443088) ondersteunt ondernemers in de bouw- en infrasector met sociale en technologische innovatie. Oprichter: Ruud Blom, 's-Hertogenbosch.
Website: **waardewerk.org**
Repo: `waardewerk-site` (GitHub)
Lokale map: `C:\Users\ruudm\waardewerk-site\`
---
## Stack
- React / Next.js / TypeScript / Tailwind CSS
- Static export — **altijd `output: 'export'`**, nooit SSR
- Hosting: Vercel (auto-deploy op git push)
---
## Kritieke regels — nooit overtreden
1. **SROI Monitor pagina nooit aanraken** (`/sroi-monitor`) — dat is een fullscreen iframe naar sroi-monitor.vercel.app. Aanraken = iframe breekt.
2. **Nooit SSR** — altijd static export. Geen `getServerSideProps`, geen API routes.
3. **Gemeente-data nooit hier** — die gaat uitsluitend naar de `sroi-monitor` repository.
4. **Commit vóór complexe multi-file wijzigingen** — altijd eerst: `git add . && git commit -m "backup voor [omschrijving]" && git push`
---
## Werkwijze
Claude (chat) schrijft instructies → Ruud plakt in Claude Code → Claude Code voert uit → git push → Vercel deployt automatisch.
**Elke Claude Code instructie eindigt altijd met:**
```
git add . && git commit -m "[omschrijving]" && git push
```
Nooit vragen of Ruud dit wil — altijd standaard erin.
---
## Huisstijl
| Element | Waarde |
|---|---|
| Primair | Donkerblauw `#1a2e45` |
| Accent | Magenta `#C4006A` |
| Tagline | "Social Return van last naar kans" |
| Knoppen | Pill-stijl, border-radius 100px |
| Labels | 11px uppercase, magenta (eyebrows) |
| Lichtroze accent | `#F9A8D4` (voor hero highlight-tekst) |
---
## Sitestructuur
| Pagina | Route | Beschrijving |
|---|---|---|
| Homepage | `/` | Onepager: Hero → Diensten → Sociale zaak → SROI Monitor showcase → Over ons → Contact |
| Diensten | `/diensten` | Sociale innovatie + Technologische innovatie, whitepaper leadform |
| Over ons | `/over-ons` | Waardewerk-missieblok + bio Ruud Blom |
| SROI Monitor | `/sroi-monitor` | Fullscreen iframe — NIET AANRAKEN |
| Privacy | `/privacy` | Privacybeleid |
| Algemene voorwaarden | `/algemene-voorwaarden` | AV |
Navigatievolgorde: Diensten · Sociale zaak · SROI Monitor · Over ons · Contact
---
## Publieke assets (`/public`)
| Bestand | Beschrijving |
|---|---|
| `Waardewerk-logo.png` | Transparante PNG |
| `favicon.ico` | Gegenereerd vanuit logo |
| `Whitepaper.pdf` | Download via diensten |
| `two_infographic.pdf` | TWO/SROI infographic |
| `linkedin-banner.jpg` | Hero achtergrond Diensten pagina |
---
## Contentregels
- Geen em-dashes — gebruik komma's
- Het woord "maar" vermijden
- Geen fictieve succesverhalen of placeholder-klanten
- "Social Return" (niet "SROI") in publieke teksten, tenzij vakpubliek
- Tekst in Ruuds stem: direct, authentiek, niet corporate
---
## Footer
`© Let's Be Well BV · 's-Hertogenbosch · waardewerk.org · Privacy · Algemene voorwaarden`
---
## Git/deployment
- GitHub account: Waardewerk / waardewerk-site
- Vercel deployt automatisch na elke push naar main
- Personal access token staat lokaal ingesteld — nooit committen of in chat plakken
