---
title: FlatForge / ColorDrop / Split-by-Color
description: How the plugin handles FlatForge, ColorDrop, and Split-by-Color exports — flat multi-color on a single plate.
---

FlatForge, ColorDrop, and Split-by-Color all hand the 3MF Export
Plugin a **single-plate, multi-volume** layout — N color parts on
one plate, different from a standard HueForge stack (which is one
mesh with extruder-tagged layer bands).

## How they differ from HugeForge tile mode

| Mode | Plates | Parts per plate | Use case |
|---|---|---|---|
| FlatForge | 1 | N (one per color) | Flat multi-color graphics |
| ColorDrop | 1 | N | Color-mapped print-in-place |
| Split-by-Color | 1 | N | User-split color bodies |
| HugeForge tile mode | N | 1 each | Huge models split into tiles |

## What you see in the slicer

- **One plate, one object**, with N volumes inside it. Each volume is
  tagged with the extruder it should print from.
- The filament list shows your N HueForge colors.
- **No layer-by-layer filament-change G-code.** Filament changes happen
  at the natural Z transitions between volumes; the slicer figures them
  out from the extruder assignments.

## The translucent cap layer (FlatForge "Face-down print" only)

FlatForge has a checkbox for "Face-down print (cap layer)". When on,
the plugin:

1. Prepends a slot-1 filament with hex `#E6E6E64D` (translucent grey,
   25% alpha).
2. Adds a flat cap layer that prints first from that translucent
   slot.
3. Your N color parts then print on top.

When face-down printed, the cap becomes the **visible top surface** —
the translucent layer diffuses the colors behind it, giving a
HueForge-like depth effect even on a non-stacked print.

When the checkbox is off, no placeholder is inserted; you see only
your N real color slots.

