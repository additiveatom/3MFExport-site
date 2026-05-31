---
title: HugeForge tile mode
description: How the HugeForge dialog's export produces one plate per tile inside a single 3MF — or one 3MF per tile.
---

## What HugeForge tile mode is

HugeForge is a HueForge add-on for printing huge models that won't
fit on a single build plate. You split the model into N tiles, print
each on its own plate, and assemble.

## How the plugin handles it

When you trigger an export from HueForge's **HugeForge dialog** (the
3MF Export tab appears inside it), a **Save Multiple 3MF Files**
checkbox controls the output shape:

### Save Multiple 3MF Files - unchecked (default) — one 3MF, N plates

- The plugin produces a single 3MF.
- That 3MF contains N plates — one per tile.
- Each plate has the same printer profile, filament list, and tool
  changes; only the mesh differs.
- Open in Bambu Studio → left plate selector shows all N tiles.
- Open in PrusaSlicer → top plate selector shows all N tiles.

Slice each plate, send each one to the printer separately.

### Save Multiple 3MF Files - checked — N separate 3MF files

- The plugin produces N independent `.3mf` files.
- Each named `<project>-<tile-id>.3mf`.
- Useful when your slicer's plate-selector UI is awkward or when
  you want to batch-load with drag-and-drop.

Functionally identical to the multi-plate variant; just a file-layout
preference.

## Where the checkbox lives

The option only appears inside the HugeForge plugin 3MF Export
dialog.

## Tile mode vs FlatForge

These are different concepts:

| Tile mode (HugeForge) | FlatForge |
|---|---|
| Splits one big model across N plates | One plate, N color stacks (parts/volumes) |
| Multi-plate output | Single-plate output |
| Each tile is a separate print job | One print job covers all colors |

See [FlatForge reference](/reference/flatforge/).
