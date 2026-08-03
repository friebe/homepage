# Design — Jan Friebe Portfolio

Locked design system for this site. Every page reads this file before emitting code.

## Genre
editorial

## Macrostructure
- Home / About: **02 · Long Document** — single column prose, typographic links, no cards
- Variation: letter-shaped intro on home; about page is continuous prose

## Theme — Monochrome
Schlicht schwarz-weiß. Keine Farbakzente — Persönlichkeit über Typografie und Mark.

- `--color-paper`    oklch(99.2% 0 0)
- `--color-paper-2`  oklch(96% 0 0)
- `--color-ink`      oklch(18% 0 0)
- `--color-ink-2`    oklch(42% 0 0)
- `--color-ink-3`    oklch(58% 0 0)
- `--color-rule`     oklch(88% 0 0)
- `--color-focus`    oklch(18% 0 0)

## Typography
- Display: Instrument Serif, weight 400, style normal
- Body:    IBM Plex Sans, weight 400
- Outlier: IBM Plex Mono, weight 400 — **max 2 roles:** inline code-moment (highlight line), footer credits

Ratio: perfect fourth (1.333). Measure: 38rem (~60ch).

## Nav & Footer
- Nav: **N9** Edge-aligned minimal — Mark + wordmark left, single CTA right
- Footer: **Ft2** Inline rule — hairline above, one credit line

## Motion
motion-cut. One exception: blinking cursor on highlight phrase (`prefers-reduced-motion` respected).

## Icon
**JF ligature** — personal monogram, original artwork. Shared stem (F crossbars + J-hook), square terminals, registration dot upper-right. Signals design precision + editorial craft. Not derived from third-party marks. Monochrome via `currentColor`. Nav wordmark + favicon only.

## Slop gates (explicit overrides)
- User brief: strict B&W, no chromatic accent. Monochrome theme; near-white/near-black OKLCH only.
- Inter banned per Hallmark typography — use IBM Plex Sans.
