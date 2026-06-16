# Bouwhistorie — Waardewerk Site
*Actuele projectdocumentatie. Bijwerken na elke significante wijziging.*

---

## 1. PROJECTOVERZICHT

| | |
|---|---|
| **Bedrijf** | Waardewerk (handelsnaam Let's Be Well BV, KvK 95443088) |
| **Oprichter** | Ruud Blom, 's-Hertogenbosch |
| **Website** | waardewerk.org |
| **Repo** | github.com/Waardewerk/waardewerk-site (branch: main) |
| **Hosting** | Vercel — auto-deploy op push naar main |
| **Vercel project** | prj_psYdNM7spLHIqGefm8HkJrw770Li (org: team_879vSWJYjEkb7vov9DxgJLmJ) |

---

## 2. TECH STACK

| Package | Versie | Rol |
|---|---|---|
| react | ^19.2.4 | UI framework |
| react-dom | ^19.2.4 | DOM renderer |
| react-router-dom | ^7.14.0 | Client-side routing |
| typescript | ~5.9.3 | Type-checking |
| vite | ^8.0.1 | Build tool |
| tailwindcss | ^3.4.19 | Utility CSS |

**Buildscript:**
```
tsc -b && vite build (client) && vite build --ssr (server) && node scripts/prerender.mjs
```
De SSR-build wordt uitsluitend gebruikt voor `prerender.mjs` — dat genereert statische HTML-snapshots per route voor SEO. Er is geen runtime SSR; de site is volledig statisch.

---

## 3. HUISSTIJL

| Element | Waarde |
|---|---|
| Primair blauw | `#1a2e45` (Tailwind: `blauw`) |
| Magenta | `#C4006A` (Tailwind: `magenta`) |
| Magenta licht | `#FCE8F3` (Tailwind: `magenta-licht`) |
| Magenta mid | `#F9A8D4` (Tailwind: `magenta-mid`) |
| Grijs | `#64748b` (Tailwind: `grijs`) |
| Lijn | `#ede8f0` (Tailwind: `lijn`) |
| Achtergrond alt | `#FAFAF9` (Tailwind: `bg-alt`) |
| Font | Inter 400/500/600 via Google Fonts |
| Eyebrow stijl | `.eyebrow` — 11px, uppercase, magenta, letter-spacing 0.08em, weight 600 |
| Knoppen | Pill-stijl, border-radius 100px |
| Marquee animatie | `@keyframes marquee` in `src/index.css` |

---

## 4. SITESTRUCTUUR

| Route | Component | Beschrijving |
|---|---|---|
| `/` | `HomePage` (in App.tsx) | Onepager: Hero → LogoCarrousel → OnsVerhaal → OverOns → Nieuws → Contact |
| `/nieuws` | `pages/Nieuws.tsx` | Nieuwsoverzicht, alle items |
| `/nieuws/:slug` | `pages/NieuwsDetail.tsx` | Detailpagina per item, met YouTube/image hero en Spotify embed |
| `/sroi-monitor` | `pages/SROIMonitor.tsx` | Fullscreen iframe → sroi-monitor.vercel.app — NIET AANRAKEN |
| `/privacy` | `pages/Privacy.tsx` | Privacybeleid |
| `/over-ons` | `pages/OverOns.tsx` | Missie en bio Ruud Blom |

**Navigatie (Nav.tsx):** Nieuws · SROI Monitor · Contact (scroll) · Neem contact op (popover met telefoon + mail)

---

## 5. COMPONENTENSTRUCTUUR

Alle actieve componenten in `src/components/`:

| Component | Gebruikt in | Beschrijving |
|---|---|---|
| `Nav.tsx` | Alle pagina's | Sticky navigatiebalk, popover met directe contactgegevens |
| `Hero.tsx` | HomePage | Hero met CTA-knop |
| `LogoCarrousel.tsx` | HomePage | Marquee met partnerlogo's |
| `OnsVerhaal.tsx` | HomePage | Tekstblok over Waardewerk |
| `OverOns.tsx` | HomePage + OverOnsPage | Bio Ruud Blom |
| `Nieuws.tsx` | HomePage | Nieuws-teaser (FeaturedCard + CompactCards) |
| `Contact.tsx` | HomePage | Contactformulier via Formspree |
| `ContactModal.tsx` | HomePage | Modal contactformulier via formsubmit.co |
| `Footer.tsx` | Alle pagina's | © 2026, links naar Privacy en Algemene voorwaarden |
| `Seo.tsx` | Alle pagina's | React 19 head-hoisting voor title/description/canonical |

Pagina's in `src/pages/`: `Nieuws.tsx` · `NieuwsDetail.tsx` · `OverOns.tsx` · `Privacy.tsx` · `SROIMonitor.tsx`

Data in `src/data/`: alleen `news.ts`

---

## 6. NIEUWSSYSTEEM

**Bestand:** `src/data/news.ts`

**Interface `NewsItem`:**
```ts
{
  slug: string       // URL-segment /nieuws/<slug> — lowercase, koppeltekens
  title: string
  date: string       // ISO YYYY-MM-DD, bepaalt sortering (nieuwste eerst)
  body: string       // Samenvatting / intro tekst
  tag?: string       // Optioneel label (bijv. 'Podcast', 'Innovatie')
  dateLabel?: string // Vrije datumtekst (bijv. 'Juni 2026')
  image?: string     // Pad (/public) of externe URL voor hero-afbeelding
  youtube?: string   // YouTube video-ID
  spotify?: string   // Spotify episode-ID
}
```

**Helperfuncties:** `getAllNews()` · `getLatestNews(n)` · `getNewsBySlug(slug)` · `formatNewsDate(date)` · `getDateLabel(item)`

**Huidige nieuwsitems:**

| Slug | Datum | Tag | Media |
|---|---|---|---|
| `praktijkmeesters-podcast-patrick-wagenaar` | 2026-06-15 | Podcast | image + Spotify |
| `the-future-is-now` | 2026-04-23 | Innovatie | YouTube |
| `is-robotisering-klaar-voor-de-straatwerkbranche` | 2026-04-01 | Innovatie | image |

**Nieuw item toevoegen:**
1. Open `src/data/news.ts`
2. Voeg bovenaan de `NEWS` array een object toe (nieuwste eerst)
3. Verplicht: `slug`, `title`, `date`, `body`
4. Optioneel: `tag`, `dateLabel`, `image`, `youtube`, `spotify`
5. Sla op en commit: `git add . && git commit -m "Nieuwsitem: [titel]" && git push`

---

## 7. EXTERNE KOPPELINGEN

| Service | URL / ID | Gebruikt in |
|---|---|---|
| Formspree | `https://formspree.io/f/mgoqdjeq` | `Contact.tsx` — contactformulier homepage |
| formsubmit.co | `https://formsubmit.co/ajax/ruudmblom@gmail.com` | `ContactModal.tsx` — modal contactformulier |
| Spotify embed | episode-ID in `news.ts` | `NieuwsDetail.tsx` |
| YouTube embed | video-ID in `news.ts` | `NieuwsDetail.tsx` |
| SROI Monitor | `sroi-monitor.vercel.app` | `pages/SROIMonitor.tsx` (fullscreen iframe) |
| Google Fonts | Inter | `index.html` |

---

## 8. PUBLIEKE ASSETS (`/public`)

### Actief gebruikt

| Bestand | Beschrijving |
|---|---|
| `Waardewerk-logo.png` | Logo in Nav |
| `favicon.ico` / `favicon.svg` | Browsericoon |
| `algemene-voorwaarden.pdf` | Gelinkt vanuit Footer |
| `linkedin-banner.jpg` | Hero-achtergrond |
| `praktijkmeestersstudio.jpg` | Afbeelding podcast-nieuwsitem |
| `robohouse-kickoff.jpeg` | Afbeelding robotisering-nieuwsitem |
| `ruud.jpg` | Foto Ruud Blom (OverOns) |
| `Bamlogo.png` / `Kvdmlogo.png` / `Tudelftlogo.png` / `Vanmeerlogo.png` / `Robohouselogo.jpg` / `Verkeersregelaars.png` | Partnerlogo's in LogoCarrousel |

### Standalone HTML-pagina's (buiten React-app)

| Bestand | Rewrite in vercel.json |
|---|---|
| `sroi_page.html` | Ja |
| `two_page.html` | Ja |
| `two_infographic.html` | Nee |

### Aanwezig maar niet actief gelinkt

`Whitepaper.pdf` · `SROIdata.xlsx` · `hero-bouw.jpg` · `hero-breed.jpg` · `icons.svg` · `wwlogodonkerblauw.png` · `wwlogotransp.png`

---

## 9. DEPLOYMENT & GIT

- **Auto-deploy:** elke push naar `main` triggert Vercel-deploy
- **Elke sessie afsluiten met:** `git add . && git commit -m "[omschrijving]" && git push`
- **Prerender:** `scripts/prerender.mjs` genereert statische HTML per route via SSR-bundle (build-time only)
- **vercel.json:** `outputDirectory: dist/client`, rewrites voor SPA-routing + `/sroi_page.html` + `/two_page.html`

---

## 10. CRUCIALE REGELS

1. **SROI Monitor nooit aanraken** (`/sroi-monitor`) — fullscreen iframe naar sroi-monitor.vercel.app; aanraken = iframe breekt
2. **Nooit SSR** — altijd static export, geen `getServerSideProps`, geen API routes
3. **Gemeente-data nooit hier** — uitsluitend in de `sroi-monitor` repository
4. **Commit vóór complexe multi-file wijzigingen** — eerst backup-commit

---

## 11. ARCHITECTUURKEUZES

| Beslissing | Reden |
|---|---|
| Statische export via prerender | Vercel hosting, geen server nodig, snelle laadtijd |
| SROI Monitor als aparte repo + iframe | Gemeente-data en monitor-logica horen niet in de marketingsite |
| Nieuws als data-array in `news.ts` | Geen CMS nodig voor kleine hoeveelheid items, simpel te onderhouden |
| React 19 head-hoisting via `Seo.tsx` | Werkt native, geen extra library nodig |
| Contactformulieren via Formspree / formsubmit.co | Geen backend of Resend-setup vereist |
| Download-leadforms verwijderd (juni 2026) | Niet meer in gebruik; LeadCaptureModal, TWO component en Diensten-pagina opgeruimd |

---

*Gegenereerd op: 16 juni 2026*
