---
title: What the 3MF Export Plugin does
description: A short, plain-language overview of what the plugin produces and how it fits between HueForge and your slicer.
---

The 3MF Export Plugin is a HueForge add-on that produces 3MF files
ready to drop straight into your slicer — with the printer profile,
filament colors, layer assignments, and filament-change G-code all
embedded.

## Without the plugin

You save STLs from HueForge, open your slicer, manually set up the
printer profile, manually assign each part to an extruder, and manually
add a filament change at every Z-height in `Describe.txt`. Easy to fumble.

## With the plugin

You pick your slicer + printer profile in HueForge's **Export 3MF**
dialog and hit Export. The 3MF that drops out has:

- The correct printer profile selected
- Filament colors matching your HueForge swatches, in the
  [slot order](/reference/filament-order/) you choose
- All meshes centered on the bed and assigned to the correct extruder
- Filament-change G-code (or pause G-code, depending on the printer) at
  the right Z-heights — no `Describe.txt` to read
- For FlatForge face-down prints, an optional
  [translucent cap layer](/reference/flatforge/#the-translucent-cap-layer-flatforge-face-down-print-only)

Tick **Open 3MF after export** and the plugin opens the file in the
slicer you exported for. Slice, print.

## Supported slicers

Eleven currently, with bundled printer profiles for:

| Slicer | Bundled printer profiles |
|---|---|
| Bambu Studio | A1, A1 mini, A2L, P1P, P1S, P2S, X1, X1 Carbon, X2D, H2C, H2D, H2D Pro, H2S |
| Orca Slicer | Bambu Lab A1, A1 mini, P1P, P1S, P2S, X1, X1 Carbon, X2D, H2D, H2S; Anycubic Kobra S1; Creality Ender-3 Pro, K1 Max; Elegoo Centauri Carbon, Centauri Carbon 2; Snapmaker U1 |
| Elegoo Slicer | Centauri, Centauri Carbon, Centauri Carbon 2 |
| Anycubic Slicer Next | Kobra 3, Kobra 3 V2, Kobra 3 Max, Kobra S1, Kobra S1 Max, Kobra X |
| PrusaSlicer | MK3S, MK3.5, MK3.5 MMU3, MK4S, MK4S MMU3, MK4 IS, MINI IS, XL 5-tool IS, CORE One, CORE One MMU3, CORE One L MMU3, CORE One INDX (4T / 8T) |
| SuperSlicer | Voron V2 350 Afterburner |
| Snapmaker Orca | Snapmaker U1 |
| QIDI Slicer | X-Plus 4 |
| QIDI Studio | Q2, X-Max 4, X-Plus 4 |
| Flashforge Studio | AD5X, Adventurer 5M, Adventurer 5M Pro, Adventurer A5, Creator 5, Creator 5 Pro |
| Creality Print | SPARKX i7 |

*Flashforge Studio was called Orca Flashforge before version 1.0.8.*

Not in the list? [Import a printer profile](/getting-started/import-profile/)
from any 3MF sliced in your slicer of choice.

## What's next

- [See what's new in 1.1.0](/whats-new/)
- [Install the plugin](/getting-started/install/)
- [Walk through your first export](/getting-started/first-export/)
- [Browse the FAQ](/faq/)
