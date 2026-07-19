---
title: Importing a printer profile
description: When the bundled profiles don't cover your printer, how to bring in your own from a sliced 3MF or a slicer-exported config ZIP.
---

The plugin ships with profiles for the most common printers — the
Bambu A/P/X/H-series, Anycubic Kobra 3 / KS1 family, Elegoo Centauri
family, Prusa MK4S / MINI IS / XL / CORE One (incl. MMU3 and IDX),
QIDI X-Plus 4 / X-Max 4 / Q2, Snapmaker U1, Flashforge AD5X, and
more. See the [full list](/getting-started/overview/#supported-slicers).
If yours isn't there, import one in 30 seconds.

## Two import sources

The **Import Template** group inside the Export 3MF dialog accepts:

| Source | What it is | When to use |
|---|---|---|
| **A sliced .3mf** | Any 3MF your slicer has produced from a real print | Easiest — you already have one in your slicer's output folder |
| **A config .zip** | The bundle exported via *Slicer → Export Config Bundle* (or equivalent) | When you don't have a representative 3MF, or you want to capture a specific process preset |

The file picker filter shows both formats — pick whichever you have.

## Doing the import

1. Click **Browse…** in the Import Template group.
2. Select your `.3mf` or `.zip` file.
3. The status text reports which printer + process pair was detected.
4. Hit **Import**.
5. The imported profile shows up in the **Printer Profile** dropdown
   with combined naming: *printer-name - process-name @vendor-tag*
   — e.g. *Bambu Lab P1S - 0.08mm Fine @BBL P1S*.

## Importing multiple processes for the same printer

If you slice the same printer at 0.04 mm, 0.08 mm, and 0.20 mm and want
all three available, import three separate 3MFs / zips — one per
process. The combined naming keeps them distinct in the dropdown.

## Removing an imported profile

Use the trash icon next to the Printer Profile dropdown. The trash is
**greyed out for bundled profiles** (you can't delete what the plugin
ships); it's enabled only for ones you've imported.

## Where imported profiles live on disk

| OS | Path |
|---|---|
| Windows | `%APPDATA%\HueForge\PrinterConfigs\` |
| macOS | `~/Library/Application Support/HueForge/PrinterConfigs/` |
| Linux | `~/.local/share/HueForge/PrinterConfigs/` |

You can back this folder up, sync it across machines, or share a
profile with someone else by sending them the JSON / INI inside.

## When the import fails

- **"No printer settings found"** — the file is a sliced 3MF from a
  slicer the plugin doesn't recognize. Send us the file via
  [contact](/contact/) and we'll add it.
- **"Multiple printers found, picking the first"** — a config bundle
  contained more than one printer. The first one wins. Export a
  narrower bundle, or import the printer-specific 3MF directly.
- **"Filament colors look off"** — colors come from your HueForge
  project, not the imported profile. The imported profile's filament
  *types* (PLA, PETG temperatures) are what's used.
