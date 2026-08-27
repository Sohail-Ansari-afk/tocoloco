# Toco Loco — Cantina Mexicana Design System

## 1. Visual Theme & Atmosphere

Toco Loco's design system is a **vibrant, playful Mexican cantina identity** built around a warm pale-yellow canvas, deep Mexican green, bright golden yellow, and fiery red/orange accents — brought to life with an original cast of illustrated characters, hand-crafted graphic details, and mouth-watering food photography. The canvas is a warm pale-faint-yellow (`#FFF1C7`) that reads like a sun-bleached cantina wall or a vintage poster stock, while the signature **Deep Mexican Green** (`#075319`) anchors the brand moment on logo, navigation, headings, dark bands, and footer. Bright Yellow (`#F7C844`) and Golden Yellow (`#F2A900`) carry the energetic accent role, while Fiery Red (`#E43820`) and Orange (`#F36B21`) are used far more liberally than a typical "restrained" system — they're the site's energy colors, reserved for promotional moments, spice cues, and character accents.

The website should feel Mexican, energetic, friendly, youthful, and slightly mischievous — food-focused, illustrated, and premium, but **never childish**. The characters give the site its personality, while restrained typography discipline, generous whitespace, and purposeful motion keep the whole system feeling premium rather than like a cartoon game.

Typography carries most of the brand voice, but the philosophy flips from Starbucks' "confident and quiet" to **"big, bold, and poster-like."** The primary typeface is **Manrope**, geometric and readable enough to anchor body copy and UI, while the giant character-driven headlines lean on **Archivo Black** for a modern poster feel. A decorative Mexican-personality font — **Bungee** or **Lilita One** — is used sparingly for badges, tiny labels, character names, and stickers, never for body copy.

The surfaces still breathe through rounded geometry, but with more variation than Starbucks' universal 50px pill. Buttons stay full-pill for primary CTAs, but cards move to an 18–24px "editorial food card" radius rather than a soft 12px SaaS radius, and several elements (character badges, sticker labels) are deliberately smaller and slightly irregular to avoid a generic UI-kit feel. The floating "Frap" circular order button is replaced by a **taco-inspired floating "Order Now" button** — the product's signature depth move, carrying the same bottom-right persistence and layered-shadow physicality, but now styled with a screen-printed, sticker-like shadow (`0 4px 0` hard-edge offset) rather than a soft ambient blur. Shadows overall trade Starbucks' whisper-soft blur for a more **graphic, poster-printed physicality** — flat hard-edge offset shadows on buttons and character stickers, softer blurred shadows only on standard content cards.

**Key Characteristics:**
- Pale-yellow canvas (`#FFF1C7`) as the primary background — references vintage poster stock and cantina walls, not a neutral SaaS white
- Deep Mexican Green (`#075319`) as the single dominant dark brand color — logo, nav, headings, dark bands, footer
- Bright Yellow (`#F7C844`) and Golden Yellow (`#F2A900`) as energetic general-purpose accents — not reserved for a single "status" moment the way Starbucks reserved gold
- Fiery Red (`#E43820`) and Orange (`#F36B21`) used deliberately and often, as the system's "turn up the heat" energy colors
- Three-tier typography: Manrope (primary/body), Archivo Black (display/hero), Bungee or Lilita One (decorative/sticker — used sparingly)
- An original illustrated **character universe** (El Capitán, Chip, La Jefa, Nacho, Salsa, Guac, Fuego, Lime, Taco Loco, Los Chilis) gives the site personality without overpowering the food
- Full-pill buttons for primary CTAs with a "sticker/poster" hover-lift + hard shadow instead of Starbucks' pure `scale(0.95)` compression
- Floating taco-shaped "Order Now" CTA — the site's signature elevation element, replacing the Frap circular button
- Sticker-style badges (`NEW`, `HOT`, `SPICY`, `VEGAN`, `★ CUSTOMER FAVORITE`) with slight rotation (`-3deg`) for a hand-placed feel
- Custom SVG decorative motifs (sun rays, chili silhouettes, cactus, lime slices, hand-drawn lines) at low opacity (5–15%) — never emoji as primary brand graphics
- "Food First" principle: food imagery gets visual priority, ordering is never more than one interaction away, characters support rather than overpower the food

**Color-block page rhythm:** Pale Yellow hero → Pale Yellow body → Deep Green food/feature band → Pale Yellow → Red/Orange energy band → Pale Yellow → Deep Green story band → Pale Yellow → Deep Green footer — a poster-bright body bookended and punctuated by deep green and fiery red/orange moments, rather than Starbucks' single espresso-dark bookend.

## 2. Color Palette & Roles

### Primary

- **Primary Background — Pale Faint Yellow** (`#FFF1C7`): The main website canvas. Used for hero, about sections, menu backgrounds, story sections, whitespace, and footer transitions. This is the system's most frequent surface — the equivalent of Starbucks' warm cream, but brighter and more poster-like.
- **Primary Brand Green — Deep Mexican Green** (`#075319`): The single dominant dark brand color. Used for logo, navigation, major headings, dark sections, footer, borders, character labels, and icons. This is the color that gives the pale-yellow canvas its contrast, and the color the whole palette should be read against.
- **Bright Yellow** (`#F7C844`): The energetic yellow accent. Used for highlighted words, buttons on dark backgrounds, badges, decorative elements, character accents, borders, and hover states. **Never used for large body text directly on the pale-yellow canvas** — the contrast is too weak; reserve bright-yellow typography for dark-green or red surfaces.
- **Golden Yellow** (`#F2A900`): Secondary yellow, used for food highlights, secondary accents, taco-shell illustration tones, and hover details.

### Secondary & Accent

- **Fiery Red** (`#E43820`): The system's energy color — used far more often than a typical "restrained" accent. For spicy-food cues, promotional sections, important badges, selected menu categories, character accents, CTA highlights, and decorative shapes.
- **Orange** (`#F36B21`): Secondary energetic color. Useful for hero backgrounds, promotional cards, illustrated sections, gradients *inside artwork only*, and hover effects.
- **Deep Ink** (`#171711`): Reserved for occasional high-contrast typography, small labels, icons, and legal text. Deep green remains the dominant dark color — Deep Ink is a rare accent, not a replacement for it.

### Surface & Background

- **Card Canvas** (`#FFF8DE`): A slightly lifted cream used as the background fill for menu and content cards sitting on the pale-yellow page canvas — gives cards a subtle "printed label" separation from the page without going to pure white.
- **White** (`#ffffff`): Used sparingly, for modal surfaces and specific high-contrast UI needs — not the default card background.

### Neutrals & Text

- **Text on Light**: Deep Green (`#075319`) is the primary heading/body color on the pale-yellow canvas — replaces Starbucks' near-black text convention. Deep Ink (`#171711`) is available for smaller, denser text where extra contrast is needed.
- **Text on Dark Green**: Bright Yellow (`#F7C844`) for headings, pale-yellow (`#FFF1C7`) for body copy on deep-green surfaces.
- **Text on Red/Orange**: Pale Yellow (`#FFF1C7`) for headings and body copy on red or orange surfaces.

### Semantic & Category

- **Spice Level**: Chili-icon indicator system — Mild (1 chili), Medium (2 chilis), Hot (3 chilis) — rendered in Fiery Red.
- **Dietary Labels**: `VEG`, `VEGAN`, `GLUTEN FREE` — small sticker-style badges, typically deep-green text on a pale-yellow or white chip.
- **Popular Badge**: `★ CUSTOMER FAVORITE` — Golden Yellow star glyph with deep-green text.

### Gradient System

Website surfaces stay **solid color** — no structural gradient tokens on layout/UI surfaces, preserving the poster/comic feel rather than a corporate-SaaS look. Gradients are permitted **only inside illustration and hero artwork**: red → orange, yellow → orange, green → yellow transitions within character art or hero compositions, never on flat UI surfaces like cards, buttons, or section backgrounds.

## 3. Typography Rules

### Font Family

- **Primary:** `Manrope, "Helvetica Neue", Helvetica, Arial, sans-serif` — used across nearly every UI and body-copy surface. Chosen over Plus Jakarta Sans for having enough geometric personality while remaining extremely readable.
- **Display / Hero:** `"Archivo Black", Arial Black, sans-serif` — used for giant character-driven headlines. A modern, bold poster feel; the typography itself becomes part of the illustration.
- **Decorative / Mexican Personality:** `"Bungee", "Lilita One", cursive` — used sparingly, only for badges, tiny labels, character names, and promotional stickers. **Never used for body copy.**

Only one weight of Archivo Black is loaded; Manrope loads at 400 / 500 / 700 / 800. Self-host both where possible rather than loading additional Google Fonts — the system deliberately avoids the "8 fonts" performance trap.

### Hierarchy & Scale

- **Hero headline:** `clamp(4rem, 10vw, 9rem)`, weight 900 (Archivo Black), line-height `0.82–0.95` — very large, tight, poster-style stacking (e.g. "REAL / MEXICAN / FLAVOR.")
- **Section headings:** Archivo Black, sized down proportionally per section importance, deep green on pale yellow / bright yellow on deep green / pale yellow on red-orange
- **Body copy:** Manrope 400, comfortable reading line-height (~1.5), deep green or deep ink on light surfaces
- **Labels / badges / stickers:** Bungee or Lilita One, small size, uppercase, often with slight rotation (`rotate(-3deg)`) for a hand-placed sticker feel

### Principles

- **Typography as illustration.** The hero headline isn't just a heading — its scale and stacking are treated as a graphic element alongside the characters, replacing Starbucks' more restrained "weight-shift-carries-hierarchy" approach.
- **Heading color follows surface, not a single brand color.** Deep Green on pale yellow; Bright Yellow on deep green; Pale Yellow on red/orange. This three-way contrast system replaces Starbucks' single "Starbucks-Green-for-H1" rule.
- **Decorative type stays decorative.** Bungee/Lilita One is confined to badges, stickers, and character names — mixing it into body copy or long-form UI text is a Don't (see Section 11).
- **Body text never sits on Bright Yellow directly** — contrast against the pale-yellow canvas is too weak; body copy stays Deep Green or Deep Ink.

## 4. Logo System

The Toco Loco logo — combining pale yellow, deep green, taco, red, orange, and yellow — is the **source of truth for the entire palette**, not a separate asset applied on top of a pre-existing system.

- **Desktop:** logo renders at approximately `120–160px` wide in the nav
- **Mobile:** logo renders at approximately `100–120px` wide
- **Placement:** the logo keeps its natural illustrated identity — it is never placed on a dark-green circle, generic white navbar chip, or otherwise boxed in a way that flattens its character
- **Clear space:** maintain generous clear space around the logo equal to roughly the height of the taco icon within it, on both light and dark surfaces

## 5. Character System

This is the single biggest addition to the design system relative to the original Starbucks-inspired file, and it should be treated as a first-class system component, not decoration.

### Character Roles

- **Taco Loco** — the face of the brand; primary focal character, appears most often (hero, footer, 404)
- **El Capitán** — the boss of flavor
- **Chip** — fast, fresh, always ready to roll
- **La Jefa** — runs the cantina
- **Nacho** — brings the beats and the heat
- **Salsa** — spicy, sweet, full of flavor
- **Guac** — cool, creamy, always chill
- **Fuego** — brings the fire; anchors the red/orange energy band
- **Lime** — fresh vibes all day long
- **Los Chilis** — a hot duo, double trouble; used for playful accent moments

Visually and narratively, these characters must be **original** — never modeled on or copying the visual structure of prior client character work (e.g. Burrito Madre's character system). Roles and personalities above are the reference; artwork direction should diverge clearly from any existing client's character designs.

### Artwork Rules

- Delivered as transparent PNG/WebP illustrated cutouts
- Large, overlapping compositions are encouraged in hero and feature sections
- Characters support the food — they frame and gesture toward menu items and CTAs rather than dominating the composition
- Mobile hero shows a **maximum of 2–3 characters** — never cram a full cast onto a ~390px screen; reduce the cast further on tablet, allow the full surrounding composition only at desktop widths

### Character Placement

- **Hero:** large illustrated characters surrounding the typography, with Taco Loco as primary focal character and food (tacos, nachos, guacamole) partially overlapping the composition
- **Feature bands:** one or two characters per band, matched to that band's theme (Fuego + Los Chilis on the red/orange "turn up the heat" band; La Jefa or El Capitán on the deep-green story band)
- **Footer:** Taco Loco peeking from the bottom edge
- **404 page:** Taco Loco rendered "confused," paired with the "AY CARAMBA!" headline

### Character Animation

- **Idle animation:** duration `3–6s`, `ease-in-out`, movement range `4–10px` — small ambient life, never a large motion
- **Entrance animation:** `opacity 0 → 1`, `translateY 30px → 0`, `scale 0.96 → 1`
- **Taco Loco specifically:** a small signature bounce, `translateY: 0 → -8px → 0`
- **Los Chilis:** tiny side-to-side movement only
- **La Jefa:** subtle head/hand movement only
- **Rule:** never animate every character on screen simultaneously — staggered, selective animation reads as premium; simultaneous animation of the full cast reads cheap

## 6. Component Stylings

### Buttons

**1. Primary CTA — "Order Now"**
- Background: `#075319` (Deep Green)
- Text: `#F7C844` (Bright Yellow)
- Radius: `999px` (full pill)
- Hover: `translateY(-2px)` with `box-shadow: 0 6px 0 #075319`
- Active: `translateY(1px)` combined with `scale(0.98)`
- This hover/active combination replaces Starbucks' pure `scale(0.95)` compression with a poster/sticker-style lift-and-press feel

**2. Secondary CTA — "View Menu"**
- Background: transparent
- Text: `#075319` (Deep Green)
- Border: `2px solid #075319`
- Radius: `999px`
- Same hover/active interaction as Primary CTA

**3. Red CTA — "Get Your Tacos"**
- Background: `#E43820` (Fiery Red)
- Text: `#FFF1C7` (Pale Yellow)
- Radius: `999px`
- Used for promotional/urgency moments, distinct from the everyday green Primary CTA

**4. Floating Order Button ("taco button")**
- Replaces the Starbucks "Frap" circular CTA concept entirely
- Desktop: a circular or slightly irregular taco-inspired button showing a taco glyph above "ORDER NOW"
- Mobile: a fixed bottom-right pill showing a taco glyph + "ORDER NOW" label
- Fixed position, persistent across scroll, but must never obstruct content
- Shadow treatment: hard-edge screen-printed shadow (`0 4px 0 #075319` style) rather than Starbucks' soft blurred halo, consistent with the system's poster-physicality shadow philosophy

### Cards & Containers

**Menu Card (editorial food card)**
- Background: `#FFF8DE` (Card Canvas)
- Border: `2px solid #075319`
- Radius: `18–24px` — deliberately not overly rounded, distinct from Starbucks' softer 12px card
- Layout: food image on top, item name + short description below, price left-aligned with a `+` add action right-aligned
- Example content: item name, one-line description, price (e.g. "₹249"), add-to-order affordance

**Sticker-Style Badges**
- Small illustrated badges — `NEW`, `HOT`, `FAVORITE`, `SPICY`, `VEGAN` — applied to menu cards and promotional cards
- Rendered with a slight rotation, `transform: rotate(-3deg)`, to read as a hand-placed sticker rather than a flat UI chip
- Typically paired with a small icon (e.g. a chili glyph for "SPICY")

**Feature Band Card (Deep Green)**
- Full-width `#075319` background section
- Bright-yellow (`#F7C844`) headline, pale-yellow body copy
- Character artwork placed to one side, CTA row on the other
- Example copy direction: "BIG FLAVOR. ZERO BORING." paired with "VIEW MENU →"

**Energy Band Card (Red/Orange)**
- Full-width `#E43820` background section — new relative to the Starbucks system, which had no equivalent red feature band
- Pale-yellow (`#FFF1C7`) headline and body copy
- Used for "TURN UP THE HEAT" style promotional moments, paired with Fuego and Los Chilis artwork
- Exists specifically to create visual rhythm alongside the Deep Green feature band — the two dark bands should not read as interchangeable

### Menu Item Detail (replaces Starbucks Product Detail cluster)

The entire Starbucks size/milk/add-in customization cluster (Tall/Grande/Venti/Trenta selector, Add-in/Milk outlined-rectangle selects, numeric stepper, Rewards Cost Pill, nutrition-facts regulation table) is removed. In its place:

- Food image (top)
- Item name (Archivo Black)
- Description (Manrope body)
- Price (e.g. "₹249")
- Spice-level indicator (chili icons — Mild / Medium / Hot)
- Ingredients list
- Allergens note
- Add-ons list (e.g. `+ Guacamole`, `+ Extra Salsa`, `+ Cheese`, `+ Jalapeños`)
- Quantity stepper
- Primary CTA: `[ ADD TO ORDER ]`

### Navigation

**Desktop Nav**
- Layout: `LOGO | MENU | ABOUT | LOCATIONS | ORDER NOW`
- Initial state: transparent or pale-yellow background over the hero
- On scroll: background resolves to `#FFF1C7` with a subtle shadow, logo shrinks slightly
- Primary nav links replace Starbucks' "Menu · Rewards · Gift Cards" with `MENU / ABOUT / OUR STORY / LOCATIONS / CONTACT`, with "ORDER NOW" as the standout primary action

**Mobile Nav**
- Collapses to a hamburger (`☰`) with a prominent standalone "ORDER" action kept visible rather than buried in the drawer
- Floating taco order button persists regardless of nav/drawer state

### Footer

- Background: `#075319` (Deep Green)
- Taco Loco character peeking from the bottom edge
- Wordmark: "TOCO LOCO — CANTINA MEXICANA"
- Link columns: Menu, Our Story, Locations, Contact
- Social links: Instagram, Facebook, Google
- Copyright line
- Replaces the Starbucks gold/white Rewards-adjacent footer entirely — no Rewards, gold-tier, or partnership components remain

### 404 Page (new — no Starbucks equivalent)

- Headline: "AY CARAMBA!"
- Subhead: "Looks like this taco took a wrong turn."
- Taco Loco rendered with a confused expression
- CTA: "BACK TO THE CANTINA →"

### Removed Components

The following Starbucks-specific components are fully removed and must not appear anywhere in the Toco Loco system: Rewards status cards, Gold-tier cards, Stars/Rewards-Cost Pill, partnership badges (SkyMiles, Bonvoy), gift-card photographed-product tiles, the size-options cup selector (Tall/Grande/Venti/Trenta), the Add-in/Milk outlined-select + numeric-stepper customization cluster, and the nutrition-facts regulation table. They are replaced by the restaurant-appropriate components above: Best Sellers, Today's Specials, Combos, Customer Favorites, Spice Level, Dietary labels, New Items, Order Online, Restaurant Story, Locations, Reviews.

## 7. Motion & Animation System

The original Starbucks-inspired system barely specified animation beyond button and accordion transitions. Toco Loco requires a full motion system, since character animation and hero motion are now core to the brand experience.

### Motion Principles

| Tier | Duration | Use |
|------|----------|-----|
| Fast UI | `150–250ms` | Hover, buttons, navigation |
| Medium reveal | `400–700ms` | Section reveals, cards, images |
| Hero animation | `800–1400ms` | Typography, characters, food imagery entrance |
| Ambient animation | `3–8s` | Characters, decorative objects, steam, chili movement |

### Hero Motion Asset

- Format: WebM, codec VP9
- Duration: 5–8 seconds
- Frame rate: 24–30fps
- Audio: none
- Loop: true, autoplay: true, muted: true, playsinline: true
- Desktop target: `1280×720`; Mobile target: `720×1280`
- Target file size: 2–5MB
- Poster: WebP fallback image, always present

**Fallback rules:**
- `prefers-reduced-motion` → static WebP
- Slow connection → static WebP
- Mobile → optimized mobile WebP composition by default (see Section 12); WebM is a desktop-conditions enhancement, not the mobile default

### Scroll Animation

- GSAP ScrollTrigger drives key visual moments in this order: hero characters → food cards → horizontal food gallery → character storytelling
- **Never scroll-jack the page** — normal browser scrolling must remain fully intact at all times

### Reduced-Motion Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  animation: none;
  transition-duration: 0.01ms;
}
```

Static imagery replaces animated character sequences whenever reduced motion is requested — this is not optional.

## 8. Layout Principles

### Food First Principle

Explicitly written into this system: **the website exists to make visitors hungry.** In practice this means:

1. Food imagery gets visual priority over every other element
2. The menu is always accessible, never more than one navigation step away
3. Ordering is never more than one interaction away
4. Characters support the food rather than overpowering it
5. Animation enhances appetite and brand personality — it never distracts from either
6. SEO content remains real HTML, never baked into images
7. Performance takes priority over unnecessary decorative effects

### Page Rhythm

```
PALE YELLOW
    ↓
HERO
    ↓
PALE YELLOW
    ↓
GREEN FOOD SECTION
    ↓
PALE YELLOW
    ↓
RED / ORANGE FEATURE SECTION
    ↓
PALE YELLOW
    ↓
GREEN STORY SECTION
    ↓
PALE YELLOW
    ↓
DARK GREEN FOOTER
```

### Border Radius Scale

| Element | Radius |
|---------|--------|
| Buttons | `999px` |
| Menu cards | `20px` |
| Image cards | `20–28px` |
| Hero artwork | `0–24px` |
| Modal | `24px` |
| Character badges | `4–12px` |
| Taco/order floating button | `50%` |

Some elements should remain slightly irregular rather than perfectly rounded everywhere — a deliberate move away from a generic UI-kit feel.

### Border System

- `1px` — subtle
- `2px` — standard (default for menu cards, secondary buttons)
- `3px` — character/poster emphasis
- Default border color is Deep Green; occasional yellow+green or red+green combinations are used on illustrated cards for extra graphic emphasis

### Decorative Graphic Language

Custom SVG artwork — never emoji — for background decoration: sun rays, chili silhouettes, cactus shapes, geometric Mexican-inspired motifs, lime slices, stars, hand-drawn lines. Kept at low opacity, roughly `5–15%`, so they read as texture rather than competing with primary content.

## 9. Depth & Elevation

The shadow philosophy shifts from Starbucks' whisper-soft blurred layering to a more **graphic, poster/screen-printed physicality**, while keeping the same underlying discipline of restraint (never one single heavy blur dominating the page).

| Element | Treatment | Use |
|---------|-----------|-----|
| Standard card | `0 4px 12px rgba(7,83,25,0.08)` | Default content and menu cards — a soft, low-alpha lift |
| Character sticker | `0 6px 0 #075319` | Hard-edge offset shadow for sticker-style badges and character cutout elements |
| Button (default) | `0 4px 0 #075319` | Flat offset shadow under primary/secondary buttons |
| Button (hover) | `translateY(-2px)` + `0 6px 0 #075319` | Lift-and-shadow-grow hover interaction |
| Floating order button | Hard-edge offset shadow, screen-printed feel | The system's most elevated, persistent element — replaces the Frap's soft ambient halo |

**Shadow philosophy:** where Starbucks stacked 2–3 low-alpha soft shadows to simulate ambient lighting, Toco Loco favors flat hard-edge offset shadows on interactive/character elements (a "stickers placed on a poster" feel) while keeping standard content cards on a softer, low-alpha lift so the page doesn't feel visually noisy. No single element should carry more than one dominant shadow.

## 10. SEO & Performance

Missing from the original visual-only design document; required here since ranking is a stated goal.

### Metadata (every page)

```
<title>
<meta description>
canonical
OpenGraph
Twitter card
structured data
```

### Structured Data (Restaurant-specific)

```
Restaurant
FoodEstablishment
LocalBusiness
Menu
OpeningHoursSpecification
PostalAddress
GeoCoordinates
sameAs
telephone
priceRange
```

Restaurant name, cuisine, and location must appear naturally in real, visible HTML — never hidden behind JavaScript or baked only into images.

### Image Performance

For every food image: WebP/AVIF format, lazy loading below the fold, explicit width + height attributes, responsive `srcset`, correct aspect ratio, and compression. The hero image is the exception — it loads `priority`/`eager` with a poster image, and is never lazy-loaded since it is typically the LCP element.

### Font Performance

Only two font families are loaded: Manrope (400/500/700/800) and a single weight of Archivo Black. Self-host both where possible. The decorative font (Bungee/Lilita One) is loaded only if used above the fold; otherwise defer it.

## 11. Do's and Don'ts

### Do
- Use pale yellow (`#FFF1C7`) as the primary canvas
- Use deep green (`#075319`) as the primary dark brand color
- Use bright yellow (`#F7C844`) as a general-purpose energetic accent
- Use red/orange to create deliberate energy moments
- Use original Mexican-inspired character artwork — never copied from prior client character systems
- Make food the visual priority on every page
- Use bold, oversized typography as a graphic element, not just a heading
- Keep menu/SEO content in real HTML text, never inside images
- Use subtle, staggered character animation — never animate the full cast at once
- Use WebM selectively, gated by device/connection/motion-preference conditions
- Always pair WebM with a WebP poster/fallback
- Keep motion fast and purposeful; match duration tiers to the moment
- Use generous whitespace between sections
- Use hand-drawn/sticker-like details sparingly, not on every element
- Keep the website playful but premium

### Don't
- Don't copy Burrito Madre's (or any prior client's) character designs
- Don't lean on generic Mexican stereotypes throughout the site
- Don't turn the website into a cartoon game — characters support the food, they don't take over
- Don't use emoji as primary brand graphics — use custom SVG artwork instead
- Don't make every section red — red/orange is an accent band, not the default
- Don't place bright-yellow text directly on the pale-yellow canvas — the contrast is insufficient
- Don't animate everything simultaneously
- Don't use huge autoplaying video backgrounds without a static fallback
- Don't sacrifice Core Web Vitals for animation
- Don't put menu information inside images — it must be real, crawlable HTML
- Don't hide important SEO content behind JavaScript
- Don't use generic, interchangeable restaurant-template cards
- Don't round every element to the same radius — some irregularity is intentional

## 12. Responsive Behavior

### Breakpoints

Keep the original breakpoint structure (xs / mobile / tablet / desktop / XLarge), but change the collapsing behavior described below — the underlying grid discipline carries over even though the visual system doesn't.

| Name | Width | Key Changes |
|------|-------|--------------|
| xs | < 480px | Hamburger nav; single-column layouts; 2–3 hero characters max |
| Mobile | 480–767px | Static WebP hero by default; stacked hero order (characters → headline → CTA → food) |
| Tablet | 768–1023px | Reduced character count in compositions; hero split begins to appear |
| Desktop | 1024–1439px | Full character-surrounds-headline hero composition; animated WebM hero if conditions allow |
| XLarge | 1440px+ | Content caps at max column width; extra pale-yellow margin |

### Hero Behavior by Device

**Mobile:** stacked order — characters, then headline, then CTA, then food — never the 40/60 split used at desktop. Show a maximum of 2–3 hero characters; don't cram a full cast onto a ~390px screen. Static WebP hero image by default.

**Tablet:** character count is reduced from the full desktop cast, hero split begins to appear.

**Desktop:** characters can fully surround the headline typography; animated WebM hero if performance and motion-preference conditions allow.

**Reduced motion or slow connection (any breakpoint):** static WebP, no exceptions.

## 13. Agent Prompt Guide

### Quick Color Reference

- Primary CTA background: "Deep Green (`#075319`)"
- Primary CTA text: "Bright Yellow (`#F7C844`)"
- Page canvas: "Pale Faint Yellow (`#FFF1C7`)"
- Card canvas: "Card Canvas (`#FFF8DE`)"
- Feature band / footer background: "Deep Green (`#075319`)"
- Energy band background: "Fiery Red (`#E43820`)"
- Heading on light: "Deep Green (`#075319`)"
- Heading on dark green: "Bright Yellow (`#F7C844`)"
- Heading on red/orange: "Pale Yellow (`#FFF1C7`)"
- Secondary accent: "Golden Yellow (`#F2A900`)"
- Spice indicator: "Fiery Red (`#E43820`)"

### Example Component Prompts

1. "Create a Toco Loco primary CTA pill button with Deep Green (`#075319`) background, Bright Yellow (`#F7C844`) text reading 'ORDER NOW →', Manrope font at 16px weight 700, `999px` border-radius (full pill). Apply a hover state of `translateY(-2px)` with `box-shadow: 0 6px 0 #075319`, and an active state of `translateY(1px)` with `scale(0.98)`."

2. "Design a menu card with `#FFF8DE` background, `2px solid #075319` border, `20px` border-radius. Top: food photo. Below: item name in Archivo Black, one-line description in Manrope, price left-aligned (e.g. '₹249'), a circular `+` add button right-aligned. Place on a `#FFF1C7` page canvas."

3. "Build the floating taco-shaped Order Now button — circular or slightly irregular shape, Deep Green fill, a small taco glyph above 'ORDER' 'NOW' text in Bright Yellow. Hard-edge offset shadow `0 4px 0 #075319`. Fixed bottom-right on desktop; a horizontal pill fixed bottom-center on mobile. Must never obstruct page content."

4. "Build a Deep Green (`#075319`) feature band — full-width section with Bright Yellow (`#F7C844`) Archivo Black headline reading 'BIG FLAVOR. ZERO BORING.', a Pale Yellow (`#FFF1C7`) Manrope body paragraph, and a 'VIEW MENU →' primary CTA. Right side: overlapping character artwork (e.g. Nacho or Guac) plus food photography. Stack vertically below 768px."

5. "Build a Fiery Red (`#E43820`) energy band — full-width section, Pale Yellow (`#FFF1C7`) Archivo Black headline reading 'TURN UP THE HEAT', Fuego and Los Chilis character artwork, chili-icon spice cues. Use this band to create rhythm against the Deep Green feature band elsewhere on the page — they should not look interchangeable."

6. "Create a sticker-style badge — small badge reading 'SPICY' with a chili glyph, Bungee or Lilita One font, rotated `-3deg`, placed on the corner of a menu card. Keep it small — a few words at most, never body copy."

7. "Design a Menu Item Detail page — food image top, item name in Archivo Black, description in Manrope, price, a chili-icon Spice Level indicator (Mild/Medium/Hot), an Ingredients list, an Allergens note, an Add-ons list ('+ Guacamole', '+ Extra Salsa', '+ Cheese', '+ Jalapeños'), a quantity stepper, and a Deep Green/Bright Yellow 'ADD TO ORDER' primary button at the bottom."

8. "Build the Toco Loco sticky navigation — desktop layout `LOGO | MENU | ABOUT | LOCATIONS | ORDER NOW`, transparent over the hero, resolving to `#FFF1C7` background with a subtle shadow and a slightly smaller logo on scroll. Mobile: hamburger icon plus a persistent standalone 'ORDER' action, not buried inside the drawer."

9. "Create the Toco Loco hero section — Pale Yellow (`#FFF1C7`) background, giant Archivo Black headline stacked 'REAL / MEXICAN / FLAVOR.' at `clamp(4rem, 10vw, 9rem)`, weight 900, line-height 0.85. Supporting Manrope line: 'Fresh tacos. Big flavors. A little loco.' Taco Loco as primary focal character surrounded by 2–4 supporting characters and overlapping food imagery (taco, nachos, guacamole)."

10. "Build a 404 page — 'AY CARAMBA!' in Archivo Black, subhead 'Looks like this taco took a wrong turn.' in Manrope, an illustration of Taco Loco looking confused, and a 'BACK TO THE CANTINA →' primary CTA button."

### Iteration Guide

When refining existing screens generated with this design system:
1. Focus on ONE component at a time
2. Reference specific color names and hex codes from this document
3. Use natural language descriptions ("pale-yellow poster canvas," "deep green as the single dominant dark color") alongside exact values
4. Preserve the full-pill CTA + hover-lift-with-hard-shadow interaction universally on primary/secondary buttons
5. Check that colors are mapped to their correct role (Deep Green for dominant dark surfaces, Bright Yellow for accents and headings-on-dark, Red/Orange for energy bands only)
6. Keep UI surfaces solid-color-block — gradients are allowed only inside illustration/hero artwork, never on flat cards, buttons, or section backgrounds
7. Never animate the full character cast simultaneously — stagger or select one to two characters per moment
8. Keep menu, pricing, and SEO content as real HTML text — never inside an image

### Known Gaps

- Exact SVG specifications for the decorative motif set (sun rays, chili silhouettes, cactus, lime slices, hand-drawn lines) are referenced by name and opacity range but not individually specified as production-ready SVG paths
- Character artwork itself (final illustrated designs for El Capitán, Chip, La Jefa, Nacho, Salsa, Guac, Fuego, Lime, Taco Loco, Los Chilis) does not yet exist — this document specifies personality, roles, and animation behavior, not final visual designs
- Bungee vs. Lilita One has not been finalized as the single decorative typeface — both are documented as candidates
- Per-component GSAP ScrollTrigger timing values beyond the general duration tiers in Section 7 are not yet specified for every interactive surface
- Restaurant structured-data field values (actual address, hours, phone, price range) are referenced by schema type only — not yet filled in with real business data
