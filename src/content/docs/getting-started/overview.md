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
- Filament colors matching your HueForge swatches
- All meshes positioned and assigned to the correct extruder
- Filament-change G-code (or pause G-code, depending on the printer) at
  the right Z-heights — no `Describe.txt` to read
- An optional translucent base layer so the colors sit on a clean
  white-balanced foundation

Open it in your slicer, slice, print.

## Supported slicers

Eleven currently, with bundled printer profiles for:

| Slicer | Bundled printer profiles |
|---|---|
| Bambu Studio | A1, A1 mini, A2L, P1P, P1S, P2S, X1, X1 Carbon, X2D, H2C, H2D, H2D Pro, H2S |
| Orca Slicer | Bambu Lab A1, Anycubic Kobra S1, Elegoo Centauri Carbon, Elegoo Centauri Carbon 2, Snapmaker U1 |
| Elegoo Slicer | Centauri, Centauri Carbon, Centauri Carbon 2 |
| Anycubic Slicer Next | Kobra 3, Kobra 3 V2, Kobra 3 Max, Kobra S1, Kobra S1 Max, Kobra X |
| PrusaSlicer | MK4S, MK4S MMU3, MK4 IS, MINI IS, XL 5-tool IS, CORE One, CORE One MMU3, CORE One IDX (4T / 8T) |
| SuperSlicer | Voron V2 350 Afterburner |
| Snapmaker Orca | Snapmaker U1 |
| QIDI Slicer | X-Plus 4 |
| QIDI Studio | Q2, X-Max 4, X-Plus 4 |
| Orca Flashforge | AD5X |
| Creality Print | SPARKX i7 |

Not in the list? [Import a printer profile](/getting-started/import-profile/)
from any 3MF sliced in your slicer of choice.

## What's next

- [Install the plugin](/getting-started/install/)
- [Walk through your first export](/getting-started/first-export/)
- [Browse the FAQ](/faq/)
