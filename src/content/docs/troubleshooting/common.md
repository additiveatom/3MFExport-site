---
title: Common issues
description: Symptom → fix lookup for the issues we hear most often.
---

If you don't see your symptom here, check the [FAQ](/faq/) or
[get in touch](/contact/).

## "Plugin doesn't appear in the menu after I installed it"

1. **HueForge wasn't restarted** — the plugin only loads at startup.
   Quit HueForge fully (Windows: tray icon too) and reopen.
2. **The drag-drop install didn't take** — drop the archive on the
   main HueForge window, not on a dialog or sub-panel. Watch for the
   install prompt; if you don't see one, the drop wasn't recognized.
   Try again.
3. **Linux: missing system library** — HueForge's log will mention
   the missing dependency (commonly `libvulkan1` or `zlib1g`).
   Install via your package manager:
   - **Ubuntu / Debian:** `sudo apt install libvulkan1 zlib1g`
   - **Fedora:** `sudo dnf install vulkan-loader zlib`
   - **Arch:** `sudo pacman -S vulkan-icd-loader zlib`

   Then restart HueForge.
4. **HueForge is older than the plugin requires** — check you have
   HueForge version **0.9.4** or newer.

## "Open 3MF after export launched the wrong slicer"

Update to **1.1.0**. Older versions handed the file to your operating
system's default `.3mf` app; 1.1.0 opens the slicer you picked in the
**Slicer** dropdown.

If 1.1.0 opens the wrong *install* of the right slicer — a release
build when you wanted a beta, say — click the **…** button next to
**Slicer** and use **Browse…** to pick the one you want. See [Opening
the 3MF in your slicer](/reference/open-in-slicer/#changing-or-resetting-the-saved-location).

## "Open 3MF after export asks me to locate my slicer" / "Could not open in slicer"

The plugin looks for each slicer in its standard install location.
If yours is installed somewhere else — or you're on Linux and the
slicer isn't a Flatpak install of Bambu Studio, Orca Slicer or
PrusaSlicer — it asks you to pick the slicer's program once and
remembers it.

If you canceled that picker, you'll see **Could not open in slicer**.
The 3MF was still exported. Click **…** next to **Slicer**, then
**Browse…**, to set the location. [Where the plugin looks
→](/reference/open-in-slicer/#standard-install-locations)

## "HugeForge opened a slicer window for every tile"

Fixed in **1.1.0** — the slicer now opens once, after the last tile
is written. Expect a short wait (about 20 seconds after the last
tile) while the plugin makes sure no more tiles are coming.

## "The 3MF opens but the slicer says no printer profile is set"

The slicer didn't recognize the embedded profile. Most common causes:

- You picked **PrusaSlicer** in the dialog but opened the 3MF in
  Bambu Studio (or vice versa). The format is slicer-specific — the
  dropdown choice has to match the slicer you'll open it in.
- Your slicer is older than the printer profile. Update the slicer to
  the latest version.
- The built in profile for the printer is not installed. Install the
  system preset for the profile you're using to make the warning stop
  from happening.

## "The 3MF loaded but I don't see any colors / filament changes"

For a standard swap-by-layer HueForge (the most common export),
Bambu Studio and most major slicers won't display the filaments
assigned within the 3MF until you slice the plate. You're almost
there — just click **Slice Plate** in the slicer after loading the
3MF, and the colors will appear at their correct heights.

## "Colors are wrong / mapped to the wrong AMS slot"

By default the plugin puts your filaments in slots in HueForge's
order — the first filament in slot 1, the second in slot 2, and so
on. (FlatForge face-down prints are the exception: the translucent
cap filament takes slot 1.) If your AMS is physically loaded in a
different order:

- Click **Edit…** next to **Filament Order** and arrange the spools to
  match your printer — see [Filament Order](/reference/filament-order/),
- Rearrange the physical AMS spools to match HueForge's order, or
- In the slicer, reassign filament slots before slicing (the slicer
  remaps the filament changes automatically).

## "Filament changes happen at wrong layer numbers vs Describe.txt"

Expected behavior — the plugin adds a Height Range Modifier so the
base prints at a thicker layer height. See [the dedicated
page](/troubleshooting/describe-txt-layer-shift/).

## "Bed-fit warning is red but my model fits"

The plugin uses the printer profile's **printable_area** field, which
is the *usable* bed (often smaller than the physical bed by the brim
margin). If the warning is wrong:

- If the model only fits sideways, tick **Rotate HueForge 90
  Degrees** — the warning re-checks the rotated footprint right away.
  (Before 1.1.0 the warning ignored the rotation.)
- Check the imported profile's `printable_area` matches your slicer's
  bed shape.
- Re-import the profile from a 3MF where the bed is configured
  correctly.

## "The model lands in the corner of the bed"

On printers whose bed origin is at the center of the bed — the
**Flashforge Adventurer 5M, 5M Pro and A5** among them — versions
before 1.1.0 placed the model in the back-right corner. Update to
**1.1.0**, which centers it. If it still happens with 1.1.0, [send us
the 3MF](/contact/).

## "My printer isn't in the Printer Profile list"

- Check **Nozzle Diameter** — the list only shows profiles for the
  selected nozzle size.
- Check **Slicer** — each slicer has its own profiles.
- Still missing? [Import a printer
  profile](/getting-started/import-profile/) from a 3MF sliced for
  that printer.

## "Cannot Write to Output Folder" / "Cannot Overwrite File"

The plugin checks it can save the 3MF before it starts:

- **Cannot Create Output Folder** / **Cannot Write to Output Folder**
  — the folder is read-only or protected (for example a system
  folder). The message includes the reason your operating system
  gave. Pick a different **Output Folder**.
- **Cannot Overwrite File** — a 3MF with the same name is open in
  your slicer, which locks it. Close the project in the slicer, or
  change **Project Name**.

## "Some print setting from my profile isn't being honored"

See [Profile values look wrong](/troubleshooting/profile-fidelity/) —
walks through the override table and how to verify a specific key was
written.

## "Plugin crashes HueForge on startup"

Send us the plugin version + your HueForge version via
[contact](/contact/). Workaround: temporarily move the plugin out of
the plugins folder to confirm it's the plugin (not another extension
crashing), and we'll dig in.
