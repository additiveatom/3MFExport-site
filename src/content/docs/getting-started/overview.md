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

Ten currently:

| Slicer | Notes |
|---|---|
| Bambu Studio | Bambu Lab printers, AMS / CFS / ACE / CANVAS / MMU / Tool Changer support |
| Orca Slicer | Bambu, Anycubic, Elegoo, Snapmaker, Multi-vendor |
| Elegoo Slicer | Centauri / Centauri Carbon / Centauri Carbon 2 |
| Anycubic Slicer Next | Kobra 3 family, KS1 |
| PrusaSlicer | MK4, MK4S, MMU3, XL |
| SuperSlicer | Voron, Multi-vendor |
| Snapmaker Orca | U1 tool changer |
| QIDI Slicer | X-Plus 4 |
| Orca Flashforge | AD5X |
| Creality Print | CFS multi-material |

## What's next

- [Install the plugin](/getting-started/install/)
- [Walk through your first export](/getting-started/first-export/)
- [Browse the FAQ](/faq/)
