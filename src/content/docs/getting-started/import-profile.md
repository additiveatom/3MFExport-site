---
title: Importing a printer profile
description: When the bundled profiles don't cover your printer, how to bring in your own from a sliced 3MF or a slicer-exported config ZIP.
---

The plugin ships with profiles for the most common printers — the
Bambu A/P/X/H-series, Anycubic Kobra 3 / KS1 family, Creality K1 Max
and Ender-3 Pro, Elegoo Centauri family, Flashforge AD5X / Adventurer 5M
/ Creator 5 families, Prusa MK3S / MK3.5 / MK4S / MINI IS / XL / CORE One
(incl. MMU3 and INDX), QIDI X-Plus 4 / X-Max 4 / Q2, Snapmaker U1, and
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
3. An **Import Template for** dropdown appears, already set to the
   slicer that made the file. Change it if the guess is wrong.
4. Hit **Import**.
5. A message confirms what was imported. The **Slicer**, **Nozzle
   Diameter** and **Printer Profile** dropdowns switch to the new
   profile, named *printer-name - process-name @vendor-tag* — e.g.
   *Bambu Lab P1S - 0.08mm Fine @BBL P1S*.

A config bundle that contains several printers imports all of them.

## Importing multiple processes for the same printer

If you slice the same printer at 0.04 mm, 0.08 mm, and 0.20 mm and want
all three available, import three separate 3MFs / zips — one per
process. The combined naming keeps them distinct in the dropdown.

## The same printer with different nozzles

Profiles for the same printer at different nozzle sizes — say, a
0.2 mm P1S you imported next to the bundled 0.4 mm one — are kept
separately. Choose the size in **Nozzle Diameter** to see the
profiles for it.

## Removing an imported profile

Use the trash icon next to the Printer Profile dropdown, then confirm
with **Remove**. The trash is **grayed out for bundled profiles** (you
can't delete what the plugin ships); it's enabled only for ones you've
imported.

## Where imported profiles live on disk

| OS | Path |
|---|---|
| Windows | `%APPDATA%\HueForge\PrinterConfigs\` |
| macOS | `~/Library/Application Support/HueForge/PrinterConfigs/` |
| Linux | `~/.local/share/HueForge/PrinterConfigs/` |

You can back this folder up, sync it across machines, or share a
profile with someone else by sending them the JSON / INI inside.

## When the import fails

- **"No Printer Profile Found"** — the plugin couldn't find printer
  settings for the slicer chosen in **Import Template for**. Check
  that it matches the slicer that made the file. If it does, send us
  the file via [contact](/contact/) and we'll add support for it.
- **"Invalid Archive"** — the file isn't a 3MF or ZIP, or it's
  damaged. Save or export it again from your slicer.
- **"Overwrite Printer Config?"** — you've already imported a profile
  with the same name. **Yes** replaces it; **No** keeps the one you
  have.
- **"Nothing Imported"** — every profile in the file was skipped,
  usually because you answered **No** to the overwrite question.
- **"Filament colors look off"** — colors come from your HueForge
  project, not the imported profile. The imported profile's filament
  *types* (PLA, PETG temperatures) are what's used.
