---
name: Stellar Sovereign
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#b71032'
  on-secondary: '#ffffff'
  secondary-container: '#da3148'
  on-secondary-container: '#fffbff'
  tertiary: '#000a1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#002049'
  on-tertiary-container: '#6989c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  success: '#1f7a4d'
  success-container: '#d6f0e1'
  on-success-container: '#053a23'
  warning: '#a05a00'
  warning-container: '#ffe2b8'
  on-warning-container: '#4a2600'
  info: '#1d4d82'
  info-container: '#dbe9fb'
  on-info-container: '#002147'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b4'
  on-secondary-fixed: '#40000a'
  on-secondary-fixed-variant: '#920023'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#24467c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  eyebrow-upper:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
    textTransform: uppercase
    color: secondary
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-xs: 4px
  stack-sm: 8px
  stack-sm-plus: 12px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 48px
  stack-2xl: 128px
  section-padding: 80px
shadows:
  institutional: 0 4px 20px rgb(0 33 71 / 0.08)
  sm: 0 1px 2px rgb(0 33 71 / 0.06)
  md: 0 4px 12px rgb(0 33 71 / 0.10)
  lg: 0 10px 30px rgb(0 0 0 / 0.16)
  focus-ring: 0 0 0 2px var(--color-primary-container)
motion:
  dur-fast: 150ms
  dur-base: 200ms
  dur-slow: 300ms
  ease-standard: cubic-bezier(.2, 0, 0, 1)
  ease-out: cubic-bezier(.2, .8, .2, 1)
---

## How to use this document

This file has two layers:

1. **Fixed tokens** (YAML frontmatter) — color values, type scale, spacing, radii, shadows, and motion durations. These stay stable; build with them via CSS variables / Tailwind theme.
2. **Flexible patterns** (sections below) — layout, surfaces, components, motion, and imagery. These describe the *current* site and the brand's default lean, but **may evolve** as long as the result still reads as authoritative, calm, and trustworthy.

When exploring a new UI direction, use the tokens and typography roles as anchors. Everything else is fair game if it passes a simple check: *Would a client facing a life-changing immigration decision feel reassured, not sold to or distracted?*

## Brand & Style
This design system projects authority, reliability, and institutional trust for a high-stakes immigration consultancy. The brand personality is "The Expert Guide"—sophisticated, unwavering, and elite. The default aesthetic leans toward **Corporate Minimalism**: clarity over clutter, whitespace over density.

The emotional target is calm assurance. A structured grid, disciplined color use, and generous spacing reduce cognitive load for users navigating sensitive legal processes. Photography and layout can be expressive within that frame—global connectivity, architectural landmarks, and professional milestones are strong directions; generic stock is weak regardless of treatment.

## Colors *(fixed)*
The palette is rooted in a "Fidelity" approach to established institutional colors. Token values in the frontmatter are the source of truth — do not swap hex values without updating the theme.

**Deep Navy Blue (#002147 / `primary-container`)** anchors headers, key text, and primary brand elements. **Crimson Red (#C41E3A / `secondary`)** works best as a strategic accent for CTAs, status, and highlights — heavy crimson reads less institutional. **Off-White (#F8F9FA / `surface`)** is the default canvas. Secondary blues and grays from the token set handle borders and surface layering.

You may combine tokens creatively (navy bands, crimson accents, alternating surfaces, tinted containers) as long as contrast and accessibility hold. Gradients and overlays, if used, should be built from existing palette tokens — not new hues.

## Typography *(fixed roles, flexible application)*
Three typefaces, fixed roles:

| Role | Face | Use |
|------|------|-----|
| Display & headlines | **Montserrat** | Section titles, hero lines, wordmark |
| Body & long-form | **Source Serif 4** | Paragraphs, service descriptions, guides |
| UI & labels | **Inter** | Nav, buttons, labels, micro-copy, eyebrows |

The scale in the frontmatter (`display-lg` through `eyebrow-upper`) is the canonical set. You may add intermediate sizes or responsive steps when a layout needs them, but keep each text block on the correct face for its role. Montserrat headlines may use slightly tightened tracking at large sizes; Source Serif carries the "official documentation" feel; Inter stays neutral for chrome.

## Layout & Spacing
**Defaults:** 1280px max container, 12-column grid, 24px gutters, base-8 vertical rhythm, 80px section padding, 4-column fluid grid on mobile with 20px side margins.

These are starting points, not a cage. Asymmetric column spans, full-bleed media within the container, offset headlines, and varied section density are all welcome when they improve hierarchy or storytelling. Prefer touch-friendly targets on mobile and maintain readable line lengths for body copy.

## Backgrounds & Surfaces
**Default:** flat surfaces alternating `surface` and `surface-container-low` to chunk sections without visual noise.

**Also valid when it serves the layout:**

- Subtle gradients built only from palette tokens (e.g. navy → `primary-container`, off-white → `surface-container-low`)
- Photography, video stills, or solid navy bands as section backgrounds
- Light texture or pattern *only* if it stays low-contrast and does not compete with text
- Abstract shapes or illustration *if* they support clarity rather than decoration — avoid playful or clip-art aesthetics

The hero currently uses a photo at `opacity-30` over Deep Navy; that pattern works well but is not mandatory. Prefer contrast through token-based color + readable type, not effects that muddy text.

## Elevation & Depth
**Default lean:** grounded, brochure-like UI — low-contrast outlines and soft ambient shadow rather than heavy floating panels.

**Token toolkit** (use as needed):

| Token | Typical use |
|-------|-------------|
| `outline-variant` 1px border | Cards, inputs, dividers |
| `--shadow-institutional` | Header, primary CTA, featured frames |
| `--shadow-sm` / `--shadow-md` | Lighter lift where hierarchy needs it |
| `--shadow-lg` | Strong lift on dark backgrounds (e.g. contact section) |
| `--focus-ring` | All interactive focus states |

Cards may be border-only, shadow-only, or both depending on context. Prefer single-layer, navy-tinted shadows over stacked or inner shadows. If an element needs to feel elevated, pick the lightest shadow tier that reads clearly.

## Shapes
**Default:** soft rectangles — `rounded` (4px) for controls, up through `rounded-2xl` (16px) for larger frames, `rounded-full` for pills and avatars.

The radii in the frontmatter are the standard set; additional steps are fine if they stay in a coherent family (avoid mixing extreme pill shapes with sharp 2px corners on adjacent elements). Circles and organic shapes are allowed for avatars, icons, and focal moments. Overall geometry should still feel structured and stable, not bubbly or toy-like.

## Components *(patterns, not prescriptions)*
Current implementations are reference points. New pages may diverge when a better pattern emerges, as long as colors, type roles, and accessibility are respected.

- **Buttons:** Default fill is Deep Navy (`primary-container`) or Crimson (`secondary`) with token-matched foreground. Outlined and ghost variants are fine. Hover/focus should be visible — opacity shifts, fill changes, underline, or subtle scale are all acceptable. Reserve the strongest shadow for the page's primary action when you want extra emphasis.
- **Cards:** White or `surface-container-lowest` fill with optional `outline-variant` border, shadow, or photo underlay. Left-border accents, tinted borders, and hover lift are allowed if they stay on-brand. Photo overlays at low opacity (`~10%`) with slow hover scale remain a good default for service tiles.
- **Navigation:** Clean, persistent header; sticky shadow optional. Link style may include underline, background pill, or icon — hover should clearly signal interactivity (crimson shift is the current default).
- **Inputs:** Visible labels (Inter Label-MD) above fields; focus ring via `--focus-ring`. Floating labels and inline validation are fine.
- **Status chips:** Prefer `success` / `warning` / `info` container pairs over raw saturated hues.
- **Progress & steps:** Linear, readable progress is the default; stepped wizards and animated indicators are fine if they stay professional, not gamified.
- **Eyebrows:** `eyebrow-upper` style for section kickers; may render inline or as a pill with blur/translucency on photo backgrounds.

## Iconography
**Default system:** Material Symbols Outlined via Google Fonts (`opsz,wght,FILL,GRAD@24,400,0,0`). Trim the glyph URL to icons actually used.

- Outlined, weight 400, opsz 24; `.material-symbols-filled` for occasional emphasis.
- Color via `currentColor` and semantic text tokens.
- Size via Tailwind text utilities, not raw icon `font-size`.

Custom SVG icons, Lucide, or other sets are **allowed** when Material Symbols lacks a glyph or a bespoke mark is clearer — keep stroke weight and visual weight consistent with Material Outlined. Avoid emoji as UI icons. Prefer `arrow_forward` / `chevron_right` (or equivalent) for directional cues.

**Logo:** typographic wordmark by default — `USD Immigration` in Montserrat 600 at `headline-md`, color `primary`. A logo mark may be introduced later if it meets the same institutional bar.

## Imagery
Imagery should **support structure and trust**, not fill empty space.

- **Strong defaults:** warm, full-color, sharp professional photography — people, architecture, global connectivity.
- **Also usable:** editorial crops, duotone or muted treatments *if* they stay premium and legible; short loops or subtle video in hero regions; custom illustration *if* it matches institutional tone (avoid cartoon or clip-art legal clichés).
- **Weak regardless of treatment:** generic handshake / globe / gavel stock, low-res assets, imagery that fights headline contrast.

Photo-over-solid-color (hero, card underlays) is a proven pattern here; gradient scrims and token-based overlays are fine when text remains readable.

## Motion & Interaction
**Default character:** calm and premium — motion clarifies state, not entertains. Use duration tokens (`dur-fast` 150ms – `dur-slow` 300ms+); prefer `ease-standard` / `ease-out` over bouncy curves.

**Encouraged:**

- Hover and focus feedback on all interactive elements
- Scroll-triggered fade/slide reveals when subtle (respect `prefers-reduced-motion`)
- Page and section transitions that feel smooth, not flashy
- Image parallax or scale on hover for depth
- Staggered list entrance for dense content, sparingly

**Use sparingly:** spring physics, bounce easing, looping decorative animation, aggressive micro-interactions that shift layout.

**Required:** visible focus ring (`--focus-ring`) on keyboard-focusable controls. Honor `prefers-reduced-motion` by reducing or disabling non-essential animation.

**Transparency / blur:** valid for overlays, sticky glass headers, modals, pills on photography, and captions — keep blur light enough that text contrast still passes.

## Content Fundamentals
The copy register is as load-bearing as the visual system — getting it wrong makes the brand read wrong even if the pixels are right.

### Voice
- **Authoritative but reassuring.** USD is the guide through a high-stakes process — never panicky, never casual.
- **Outcome-led.** Headlines name the destination ("Your Trusted Partner in Global Migration"); bodies describe the *what* and *who*, not the legalese.
- **Second-person, used sparingly.** Direct address ("**Your** career") adds warmth on key lines; most copy is descriptive third-person.
- **"We" — institutional.** The firm always speaks as "we" / "our team", never with named individuals. Never first-person singular. Never "the user".

### Tone
- Formal, not stiff. Body lines land short — 8–18 words; longer paragraphs are reserved for policy pages.
- **No exclamation points anywhere.**
- **Numbers as proof**: concrete proof points are quoted plainly ("98% Success Rate", "ICCRC-Certified Consultants", "five languages"). Never round-numbered hype.
- **No urgency language**: no "Limited time", no "Act now", no countdowns. Trust beats urgency.

### Casing
- **Title Case** for nav links, button labels, section titles, and card headlines.
- **UPPERCASE** with 0.12em tracking is reserved for eyebrow tags above sections and for blog kickers ("POLICY UPDATE", "TRAVEL GUIDE"). Rendered via the `eyebrow-upper` style.
- **Sentence case** for body paragraphs and form labels.
- **No ALL-CAPS shouting** anywhere in body copy.

### Emoji
Avoid in UI and marketing copy. If a channel absolutely requires it (e.g. social), keep it off the main site.
