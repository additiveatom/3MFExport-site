---
title: Your first export
description: Walk through the Export 3MF dialog end to end and produce your first sliceable 3MF.
---

Once the plugin is installed and you have a HueForge project open, the
end-to-end flow is:

## 1. Open the Export 3MF dialog

**Menu bar → 3MF Export → Export 3MF**. (You can also use **File → Save
Project As** and tick **Use 3MF Output** in the side panel — same
dialog, different entry point.)

## 2. Pick a slicer

The **Slicer** dropdown is the first decision. The plugin uses your
choice to drive which 3MF dialect to write — Bambu/Orca-family,
Prusa-family, or Anycubic Slicer Next have meaningfully different
formats internally.

If you don't see your slicer, you may need to
[import a printer profile](/getting-started/import-profile/) first.

## 3. Pick a printer profile

The **Printer Profile** dropdown shows two kinds of entries:

- **Bundled profiles** — for popular printers (Bambu, Elegoo, Anycubic,
  Prusa MK4, Snapmaker U1, etc.) the plugin ships ready-to-use profiles.
- **Imported profiles** — anything you've added via the **Import
  Template** group, named as *printer + process* (e.g. *Bambu Lab P1S -
  0.08mm Fine @BBL P1S*).

Pick the profile that matches the slicer you selected.

## 4. Confirm the slot count

**Total Printer Slots** auto-fills from your selected profile.
Override it with the total AMS / CFS / ACE / CANVAS / MMU / Tool Changer slots your
printer you're printing the HueForge on has. For example, if you have
a Bambu Labs printer with two AMS units that each hold 4 filaments
each, that would be (4 × 2 = 8) — so you would enter **8** total
printer slots.

The slot count drives whether filament-change G-code and/or pause G-code
is emitted at each layer transition.

## 5. Set the project name + output folder

The **Output** group has:

- **Project Name** — the basename of the exported 3MF
- **Output Folder** — where to write it
- **Open 3MF after export** — convenient for iterating
- **Save Project in Folder** — also writes the HueForge Project file **(.hfp)** next to the 3MF

## 6. Glance at Project Settings

The **Project Settings** group is read-only — it summarizes the
profile's bed dimensions and the layer-height plan the plugin will use
(usually a thick first layer for the white base, then your HueForge
layer height for the color stack).

If the model overflows the bed, a **red bed-fit warning** appears —
swap printers or scale the model before exporting.

## 7. Export

Click **Export**. The dialog closes; the 3MF lands in your output
folder; if **Open 3MF after export** was on, your slicer launches
with the file already loaded.

## 8. Slice in the slicer

Press the slicer's **Slice** button. The print profile, filaments,
extruder assignments, and filament changes are already wired — you should
not need to touch them. Save the G-code, send it to your printer.

## What can go wrong

- **Wrong slot count** — pause G-code where you wanted filament changes,
  or vice versa. See [Common issues](/troubleshooting/common/).
- **Layer numbers don't match Describe.txt** — expected, see
  [the layer-shift FAQ entry](/troubleshooting/describe-txt-layer-shift/).
