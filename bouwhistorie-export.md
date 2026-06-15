# Bouwhistorie — Waardewerk Site

## 1. Projectoverzicht

**Naam:** Waardewerk (handelsnaam van Let's Be Well BV, KvK 95443088, 's-Hertogenbosch)
**Oprichter:** Ruud Blom
**Doel:** Waardewerk ondersteunt ondernemers in de bouw- en infrasector met sociale innovatie (Social Return / SROI) en technologische innovatie (robotica, AI). De site is het visitekaartje: diensten, visie, nieuws en een doorverwijzing naar de SROI Monitor.

**Live URL:** waardewerk.org
**Lokale projectmap:** `C:\Users\ruudm\waardewerk-site\`
**GitHub repo:** Waardewerk/waardewerk-site (branch `main`)
**Vercel:** project `waardewerk-site` (projectId `prj_psYdNM7spLHIqGefm8HkJrw770Li`, org `team_879vSWJYjEkb7vov9DxgJLmJ`). Elke push naar `main` deployt automatisch.
**Gerelateerd project:** sroi-monitor.vercel.app — los Vercel-project/repo, wordt fullscreen ingeladen via iframe op `/sroi-monitor`.

---

## 2. Tech stack

| Onderdeel | Versie / tool |
|---|---|
| React | ^19.2.4 |
| React DOM | ^19.2.4 |
| React Router | ^7.14.0 |
| TypeScript | ~5.9.3 |
| Vite | ^8.0.1 (+ @vitejs/plugin-react ^6.0.1) |
| Tailwind CSS | ^3.4.19 (+ postcss ^8.5.8, autoprefixer ^10.4.27) |
| ESLint | ^9.39.4 (+ typescript-eslint ^8.57.0) |
| Resend | ^4.0.0 (e-mail API, in `api/contact.ts`) |
| @vercel/node | ^5.0.0 (types voor serverless function) |

**Build-proces** (`npm run build`):
```
tsc -b && vite build --outDir dist/client && vite build --ssr src/entry-server.tsx --outDir dist/server && node scripts/prerender.mjs
```
Dit is **geen draaiende SSR-server**. De SSR-build (`entry-server.tsx`) wordt alleen gebruikt door `scripts/prerender.mjs` om elke route (inclusief alle nieuws-slugs) eenmalig naar statische HTML te renderen, plus een sitemap.xml en robots.txt te genereren. Het resultaat is een volledig statische site in `dist/`, die Vercel als static output serveert (`outputDirectory: dist/client` in `vercel.json`). Dit past bij de regel "altijd static export, nooit SSR" — er draait geen server-runtime.

`src/main.tsx` hydrateert deze statische HTML aan de clientzijde (`hydrateRoot`) of mount normaal als er nog geen geprerenderde HTML is.

---

## 3. Huisstijl

**Kleuren** (`tailwind.config.js`):

| Naam | Hex | Gebruik |
|---|---|---|
| `blauw` | `#1a2e45` | Primaire kleur, koppen, tekst |
| `magenta` | `#C4006A` | Accentkleur, knoppen, eyebrows |
| `magenta-licht` | `#FCE8F3` | Lichte achtergrondvlakken |
| `magenta-mid` | `#F9A8D4` | Lichtroze accent (hero-highlight) |
| `grijs` | `#64748b` | Lopende tekst |
| `lijn` | `#ede8f0` | Randen/dividers |
| `bg-alt` | `#FAFAF9` | Alternatieve sectie-achtergrond |

**Lettertype:** Inter, gewichten 400/500/600, geladen via Google Fonts in `index.html`. Body-font ingesteld in `src/index.css`.

**Eyebrow-stijl** (`.eyebrow` in `src/index.css`): 11px, uppercase, 600, letter-spacing 0.08em, kleur magenta — gebruikt op vrijwel elke sectie als labeltje.

**Overig in `index.css`:** marquee-animatie (28s, pauzeert on hover) voor de logo-carrousel.

**Logo's en favicons in `/public`:** `Waardewerk-logo.png` (transparant, gebruikt in `Nav.tsx`), `wwlogodonkerblauw.png` en `wwlogotransp.png` (alternatieve varianten, niet aangeroepen in de code), `favicon.ico` en `favicon.svg`.

---

## 4. Volledige paginastructuur (uit `src/App.tsx`)

| Route | Bestand | Type | Inhoud |
|---|---|---|---|
| `/` | `src/App.tsx` (component `HomePage`) | Onepager | Hero → LogoCarrousel → OnsVerhaal → OverOns → Nieuws (teaser) → Contact → Footer |
| `/diensten` | `src/pages/Diensten.tsx` | Pagina | Hero met tabs "Sociale innovatie" / "Technologische innovatie", uitleg Social Return, 4-stappen TWO-aanpak, whitepaper/infographic-leadform |
| `/sroi-monitor` | `src/pages/SROIMonitor.tsx` | Fullscreen iframe | Embed van `sroi-monitor.vercel.app` — **niet aanraken** |
| `/nieuws` | `src/pages/Nieuws.tsx` | Overzicht | Grid met alle nieuwsitems uit `news.ts` |
| `/nieuws/:slug` | `src/pages/NieuwsDetail.tsx` | Detail | Toont één nieuwsitem (youtube/afbeelding/spotify + tekst), 404-fallback, "ook interessant"-sectie |
| `/privacy` | `src/pages/Privacy.tsx` | Pagina | Privacyverklaring |
| `/over-ons` | `src/pages/OverOns.tsx` | Pagina | `OnsVerhaal` + `OverOns` (bio Ruud Blom) |

**Let op (open punt):** CLAUDE.md noemt ook een route `/algemene-voorwaarden`, maar die bestaat niet in `App.tsx`. De Footer linkt rechtstreeks naar het statische bestand `/algemene-voorwaarden.pdf` in `/public`, niet naar een React-pagina.

---

## 5. Componentenstructuur

### `src/components`

| Bestand | Beschrijving |
|---|---|
| `Nav.tsx` | Sticky navigatiebalk (desktop + mobiel), logo, links naar Nieuws/SROI Monitor, contact-popover met telefoon/e-mail |
| `Hero.tsx` | Hero-sectie homepage, achtergrond `hero-breed.jpg`, kop met lichtroze "Waardewerk"-highlight |
| `LogoCarrousel.tsx` | Animerende marquee met partnerlogo's (Van Meer, KVDM, BAM, TU Delft, RoboHouse) |
| `OnsVerhaal.tsx` | "Ons verhaal"-sectie: Technologische Innovatie + Sociale Innovatie, afbeelding `robots-stratenmaker.png` |
| `OverOns.tsx` | Bio Ruud Blom met foto (`ruud.jpg`, met fallback-initialen) |
| `Nieuws.tsx` | Nieuws-teaser op homepage: 1 uitgelichte kaart + 2 compacte kaarten, link "Alle berichten" |
| `Contact.tsx` | Contactformulier-sectie homepage, verstuurt naar Formspree |
| `ContactModal.tsx` | Modal "Neem contact op", verstuurt naar formsubmit.co |
| `LeadCaptureModal.tsx` | Modal voor whitepaper/infographic-download, verstuurt naar formsubmit.co |
| `Footer.tsx` | Footer met copyright en links naar Privacy en Algemene voorwaarden (pdf) |
| `Seo.tsx` | Zet `<title>`, meta-description en Open Graph/Twitter-tags via React 19 head-hoisting |

**Niet (meer) gebruikte componenten** (niet geïmporteerd in `App.tsx` of elders — vermoedelijk legacy uit een eerdere opzet):
- `Diensten.tsx` (oudere diensten-grid + statsbalk, vervangen door `pages/Diensten.tsx`)
- `LogoBalk.tsx` (tekstuele "Actief met"-balk, vervangen door `LogoCarrousel.tsx`)
- `Monitor.tsx` (SROI Monitor als sectie-component, vervangen door `pages/SROIMonitor.tsx`)
- `Referenties.tsx` (testimonials-sectie, bevat alleen placeholder-tekst "Referentie volgt binnenkort")
- `SocialeZaken.tsx` (Social Return-sectie met `Verkeersregelaars.png`)
- `TWO.tsx` (uitgebreide TWO-uitleg met eigen CTA, gebruikt `LeadCaptureModal`)

### `src/pages`

| Bestand | Beschrijving |
|---|---|
| `Diensten.tsx` | `/diensten` — zie sectie 4 |
| `Nieuws.tsx` | `/nieuws` — overzicht |
| `NieuwsDetail.tsx` | `/nieuws/:slug` — detail |
| `OverOns.tsx` | `/over-ons` |
| `Privacy.tsx` | `/privacy` |
| `SROIMonitor.tsx` | `/sroi-monitor` |

### `src/data`

| Bestand | Datastructuur |
|---|---|
| `news.ts` | `NEWS: NewsItem[]` + helpers `getAllNews`, `getLatestNews`, `getNewsBySlug`, `formatNewsDate`, `getDateLabel`. `NewsItem` velden: `slug`, `title`, `date` (ISO, bepaalt sortering), `dateLabel?`, `excerpt`, `author?`, `image?`, `tag?`, `content: string[]`, `youtube?`, `spotify?` |
| `gemeenten.ts` | 196 regels, types `Status`, `BouwblokItem`, `MaatwerkActiviteit`, `Succesverhaal`, `GemeenteProfile` — gemeente-specifieke SROI-data. **Wordt nergens in `src` geïmporteerd** (dood bestand) |

---

## 6. Nieuwssysteem

**Opbouw:**
- **Databestand:** `src/data/news.ts` — array `NEWS` met alle items, nieuwste boven.
- **Overzichtspagina:** `src/pages/Nieuws.tsx` (`/nieuws`) — toont `getAllNews()` als kaartgrid (1/2/3 kolommen).
- **Detailpagina:** `src/pages/NieuwsDetail.tsx` (`/nieuws/:slug`) — toont titel, tag, datum, hero (YouTube-embed óf afbeelding), tekstparagrafen, optioneel Spotify-embed, en 2 gerelateerde items. 404-pagina bij onbekende slug.
- **Homepage-teaser:** `src/components/Nieuws.tsx` (sectie `#nieuws` op `/`) — toont de 3 nieuwste items: 1 grote "Featured"-kaart + 2 compacte kaarten.
- **Prerender:** `scripts/prerender.mjs` leest `getAllNews()` uit de SSR-bundle en genereert voor elke slug een statische `/nieuws/<slug>/index.html`, plus regels in `sitemap.xml`.

**Nieuw nieuwsitem toevoegen (stap voor stap):**
1. Open `src/data/news.ts`.
2. Plak een nieuw object **bovenaan** de `NEWS`-array (volgorde is niet belangrijk voor sortering — die gebeurt op `date`, maar bovenaan houdt het overzichtelijk).
3. Verplichte velden: `slug` (uniek, alleen kleine letters/cijfers/koppeltekens — wordt de URL), `title`, `date` (ISO `YYYY-MM-DD`), `excerpt`, `content` (array van paragraaf-strings).
4. Optioneel: `dateLabel` (bv. `'Juni 2026'` i.p.v. volledige datum), `tag` (bv. `'Podcast'`, `'Innovatie'`), `image` (pad onder `/public`, bv. `/foto.jpg`), `youtube` (video-ID), `spotify` (episode-ID), `author`.
5. Bouwen (`npm run build`) zorgt dat de nieuwe route automatisch wordt geprerenderd en in de sitemap komt.
6. Committen en pushen naar `main` → Vercel deployt automatisch.

**Huidige nieuwsitems:**

| Titel | Datum | Tag | Extra |
|---|---|---|---|
| Te gast in de Praktijkmeesters podcast van Patrick Wagenaar | 15 juni 2026 (label "Juni 2026") | Podcast | Afbeelding `/praktijkmeestersstudio.jpg` + Spotify-embed (episode `4ups2ET63AaKPygWpbDdhe`) |
| The Future is Now! | 23 april 2026 | Innovatie | YouTube-embed (`TMpqucngavY`) |
| Is robotisering klaar voor de straatwerkbranche? | 1 april 2026 | Innovatie | Afbeelding `/robohouse-kickoff.jpeg` |

---

## 7. Externe koppelingen

| Koppeling | Gebruikt in | Doel |
|---|---|---|
| Formspree (`https://formspree.io/f/mgoqdjeq`) | `components/Contact.tsx` (homepage-contactformulier) | Formulierinzendingen per mail |
| formsubmit.co (`https://formsubmit.co/ajax/ruudmblom@gmail.com`) | `ContactModal.tsx`, `LeadCaptureModal.tsx`, `pages/Diensten.tsx` (whitepaper-form) | Formulierinzendingen per mail (modals + downloadformulieren) |
| Resend (`api/contact.ts`, serverless functie via `@vercel/node`) | Niet aangeroepen vanuit huidige formulieren | Stuurt mail via Resend naar `ruudmblom@gmail.com`; vereist env var `RESEND_API_KEY`. Lijkt een ongebruikt/alternatief contactkanaal (zie open punten) |
| Spotify embed (`open.spotify.com/embed/episode/4ups2ET63AaKPygWpbDdhe`) | `pages/NieuwsDetail.tsx` (Praktijkmeesters-item) | Podcastspeler |
| YouTube embed (`youtube.com/embed/TMpqucngavY`) | `pages/NieuwsDetail.tsx` ("The Future is Now!"-item) | Video |
| SROI Monitor (`https://sroi-monitor.vercel.app`) | `pages/SROIMonitor.tsx` (fullscreen, `/sroi-monitor`) en `components/Monitor.tsx` (ongebruikt) | Los Vercel-project met SROI-data per gemeente, ingeladen via iframe |
| Google Fonts | `index.html` | Inter (400/500/600) |

---

## 8. Assets (`/public`)

| Bestand | Beschrijving |
|---|---|
| `Waardewerk-logo.png` | Hoofdlogo, gebruikt in `Nav.tsx` |
| `wwlogodonkerblauw.png`, `wwlogotransp.png` | Alternatieve logo-varianten, niet aangeroepen in code |
| `favicon.ico`, `favicon.svg` | Favicons |
| `hero-breed.jpg` | Achtergrond hero homepage |
| `hero-bouw.jpg` | Niet aangeroepen in code (mogelijk ongebruikt) |
| `linkedin-banner.jpg` | Achtergrond hero `/diensten` én default OG-afbeelding (`Seo.tsx`) |
| `robots-stratenmaker.png` | Afbeelding bij "Ons verhaal" |
| `ruud.jpg` | Foto Ruud Blom (`OverOns.tsx`) |
| `Verkeersregelaars.png` | Foto in ongebruikte component `SocialeZaken.tsx` |
| `robohouse-kickoff.jpeg` | Afbeelding bij nieuwsitem "Is robotisering klaar..." |
| `praktijkmeestersstudio.jpg` | **Nieuw** — afbeelding bij nieuwsitem Praktijkmeesters-podcast |
| `Vanmeerlogo.png`, `Kvdmlogo.png`, `Bamlogo.png`, `Tudelftlogo.png`, `Robohouselogo.jpg` | Partnerlogo's in `LogoCarrousel.tsx` |
| `Whitepaper.pdf` | Download via diensten-leadform |
| `TWO-Infographic.pdf` | Infographic-bestand op de server |
| `algemene-voorwaarden.pdf` | Algemene voorwaarden, gelinkt vanuit Footer |
| `icons.svg` | Icon-sprite, niet aangeroepen in code |
| `SROIdata.xlsx` | Databron-bestand, niet aangeroepen in code |
| `sroi_page.html`, `two_page.html`, `two_infographic.html` | Standalone statische HTML-pagina's met eigen rewrites in `vercel.json` (`/sroi_page.html`, `/two_page.html`) |

---

## 9. Open punten

- **Niet-gecommitte wijzigingen** (`git status`): `src/App.tsx`, `src/components/OnsVerhaal.tsx`, `src/pages/Diensten.tsx` en `two-fase1-notion.md` staan gewijzigd maar ongecommit. Op verzoek van Ruud bewust ongemoeid gelaten bij de laatste deploy (alleen nieuws-bestanden zijn gecommit).
- **Untracked bestanden:** `.gitignore_tmp2` en `.synctest_old` zijn lege debug-restanten uit een eerdere sessie en kunnen handmatig verwijderd worden.
- **Mogelijk gebroken downloadlink:** `LeadCaptureModal.tsx` en `pages/Diensten.tsx` verwijzen naar `/two_infographic.pdf`, maar `/public` bevat `TWO-Infographic.pdf` (andere naam/hoofdletters). Op een case-sensitive server (Vercel) geeft dit een 404 op de infographic-download.
- **`/algemene-voorwaarden`-route ontbreekt:** CLAUDE.md noemt deze route, maar in `App.tsx` bestaat hij niet — de Footer linkt naar het pdf-bestand direct.
- **`src/data/gemeenten.ts`** (196 regels gemeente-SROI-data) wordt nergens geïmporteerd in `src`. Volgens CLAUDE.md mag gemeente-data uitsluitend in de `sroi-monitor`-repo staan — dit bestand kan vermoedelijk verwijderd worden.
- **Zes ongebruikte componenten** (`Diensten`, `LogoBalk`, `Monitor`, `Referenties`, `SocialeZaken`, `TWO` in `src/components`) zijn niet meer gekoppeld aan een route — opruimen of bewust laten staan als referentiemateriaal.
- **`api/contact.ts` (Resend)** lijkt niet aangeroepen door de huidige formulieren (die gebruiken Formspree/formsubmit.co). Onduidelijk of `RESEND_API_KEY` nog nodig is of dat dit een halfafgemaakt alternatief kanaal is.
- **`Referenties.tsx`**: alleen placeholder-testimonials ("Referentie volgt binnenkort"), nog geen echte klantcitaten — en wordt sowieso niet getoond (zie hierboven).
- **`two-fase1-notion.md`** (TWO Fase 1 "Richten"): alle 6 taken staan op status "Not started" met deadlines april/mei 2026 — inmiddels verstreken t.o.v. vandaag (15 juni 2026).

---

## 10. Cruciale beslissingen

- **Static export via prerender, geen draaiende SSR-server.** De build gebruikt een SSR-bundel (`entry-server.tsx`) puur als renderstap binnen `scripts/prerender.mjs`, die elke route (incl. dynamische nieuws-slugs) naar statische HTML omzet. Resultaat: een pure static site, conform de regel "altijd `output: export`, nooit SSR" — er is geen serverproces nodig op Vercel.
- **SROI Monitor als losse iframe-embed.** De monitor draait als eigen Vercel-project (`sroi-monitor.vercel.app`) en wordt fullscreen ingeladen op `/sroi-monitor`. Dit ontkoppelt de twee codebases volledig, zodat gemeente-data nooit in deze repo hoeft te staan.
- **Nieuwssysteem als simpele data-array, geen CMS.** `news.ts` is een TypeScript-array met helperfuncties. Eenvoudig uitbreidbaar zonder externe dependency, en de prerender pikt nieuwe slugs automatisch op.
- **React 19 head-hoisting voor SEO** (`Seo.tsx`) in plaats van `react-helmet`. `<title>`/`<meta>`/`<link>` worden via een eigen extract-pass in `prerender.mjs` naar `<head>` getild, omdat `renderToString` dit niet automatisch doet.
- **Twee parallelle contactkanalen** (Formspree voor het hoofdcontactformulier, formsubmit.co voor modals/leadforms) plus een ongebruikte Resend-serverless-functie — historisch gegroeid, nog niet opgeschoond.
- **Tailwind-kleurenpalet als centrale huisstijlbron** (`tailwind.config.js`): blauw/magenta/grijs/lijn/bg-alt-tokens worden consistent door alle componenten gebruikt.

---

Gegenereerd op: 15 juni 2026
