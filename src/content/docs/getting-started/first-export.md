---
title: Your first export
description: Walk through the Export 3MF dialog end to end and produce your first sliceable 3MF.
---

Once the plugin is installed and you have a HueForge project open, the
end-to-end flow is:

## 1. Open the Export 3MF dialog

**Menu bar → 3MF Export → Export 3MF**. (You can also use **File → Save
Project As**, open the **3MF Export** tab and tick **Use 3MF Output** —
the same options, a different entry point.)

The first time the dialog opens, a short tip explains that **Open 3MF
after export** opens the file in the slicer you pick. It only appears
once.

## 2. Pick a slicer

The **Slicer** dropdown is the first decision. The plugin uses your
choice to drive which 3MF dialect to write — Bambu/Orca-family,
Prusa-family, or Anycubic Slicer Next have meaningfully different
formats internally.

The small **…** button next to it sets where that slicer is installed,
for **Open 3MF after export**. You usually don't need it — see
[Opening the 3MF in your slicer](/reference/open-in-slicer/).

## 3. Pick a nozzle and printer profile

**Nozzle Diameter** narrows the **Printer Profile** list to profiles
for that nozzle size. If a printer you expect is missing, check the
nozzle first.

The **Printer Profile** dropdown shows two kinds of entries:

- **Bundled profiles** — for popular printers (Bambu, Elegoo, Anycubic,
  Flashforge, Prusa, QIDI, Snapmaker U1, etc.) the plugin ships
  ready-to-use profiles.
- **Imported profiles** — anything you've added via the **Import
  Template** group, named as *printer + process* (e.g. *Bambu Lab P1S -
  0.08mm Fine @BBL P1S*).

Pick the profile that matches the slicer you selected. If your printer
isn't listed, [import a printer profile](/getting-started/import-profile/)
first — **Export** stays grayed out until a profile is selected.

## 4. Confirm the slot count

**Total Printer Slots** auto-fills from your selected profile.
Override it with the total AMS / CFS / ACE / CANVAS / MMU / Tool Changer slots your
printer you're printing the HueForge on has. For example, if you have
a Bambu Labs printer with two AMS units that each hold 4 filaments
each, that would be (4 × 2 = 8) — so you would enter **8** total
printer slots.

The slot count drives whether filament-change G-code and/or pause G-code
is emitted at each layer transition.

## 5. Set the output options

The **Output** group has:

- **Open 3MF after export** — opens the new 3MF in the slicer you
  picked in step 2. See [Opening the 3MF in your
  slicer](/reference/open-in-slicer/).
- **Rotate HueForge 90 Degrees** — turns the exported model 90°
  clockwise (looking down at the bed). Handy when the model only fits
  your bed sideways, or you'd rather print it the other way round.
  Your HueForge project isn't changed, and the setting is remembered.
- **Save Project in Folder** — also writes the HueForge Project file
  **(.hfp)** next to the 3MF
- **Project Name** — the basename of the exported 3MF
- **Output Folder** — where to write it
- **Filament Order** — click **Edit…** to choose which slot each
  filament uses, so the 3MF matches how your printer is loaded. See
  [Filament Order](/reference/filament-order/).

The project name is cleaned up before it's used as a file name:
characters Windows doesn't allow in file names (`< > : " / \ | ? *`)
become `_`, and leading or trailing spaces are removed.

## 6. Glance at Project Settings

The **Project Settings** group is read-only — it summarizes the
profile's bed dimensions and the layer-height plan the plugin will use
(usually a thick first layer for the white base, then your HueForge
layer height for the color stack).

Two warnings can appear here:

- **⚠ Model is larger than the printer bed** — the model's footprint
  is bigger than the profile's bed. Try **Rotate HueForge 90 Degrees**
  (the warning updates as soon as you tick it), pick a bigger printer,
  or scale the model. If you click **Export** anyway, a **Model Too
  Large for Printer** prompt asks you to confirm with **Export
  Anyway**.
- **⚠ Mixed filament types** — your project mixes filament types (for
  example PLA and PETG). Most types don't bond well to each other, so
  make sure that's what you want.

## 7. Export

Click **Export**. The dialog closes; the 3MF lands in your output
folder; if **Open 3MF after export** was on, your slicer launches
with the file already loaded.

If the file can't be saved, you'll see why instead:

| Message | What to do |
|---|---|
| **Cannot Create Output Folder** | Pick a folder you can write to |
| **Cannot Write to Output Folder** | The folder is read-only or protected — pick another |
| **Cannot Overwrite File** | A 3MF with that name is open in your slicer — close it there, or change **Project Name** |
| **Export Failed** | Something went wrong while building or writing the 3MF — [send us the details](/contact/) |

## 8. Slice in the slicer

Press the slicer's **Slice** button. The print profile, filaments,
extruder assignments, and filament changes are already wired — you should
not need to touch them. Save the G-code, send it to your printer.

> **Note:** For a standard swap-by-layer HueForge (the most common
> export), Bambu Studio and most major slicers won't display the
> filaments assigned within the 3MF until you slice the plate. If the
> loaded 3MF looks like a single color, that's expected — click
> **Slice Plate** and the colors will appear at their correct heights.

## What can go wrong

- **Wrong slot count** — pause G-code where you wanted filament changes,
  or vice versa. See [Common issues](/troubleshooting/common/).
- **Filaments in the wrong AMS slots** — set the
  [Filament Order](/reference/filament-order/) to match how your
  printer is loaded.
- **Layer numbers don't match Describe.txt** — expected, see
  [the layer-shift FAQ entry](/troubleshooting/describe-txt-layer-shift/).
