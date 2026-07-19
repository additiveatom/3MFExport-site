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

**Open 3MF after export** hands the file to your operating system,
which opens it in whatever application is registered as the default
handler for `.3mf` files — not necessarily the slicer you picked in
the export dialog.

If you use more than one slicer, either:

- Uncheck **Open 3MF after export** when exporting for the non-default
  slicer and open the file manually, or
- Change your OS's default `.3mf` association to the slicer you use
  most often.

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

The plugin maps your HueForge color at index N to slicer filament
slot N+1 (slot 1 is reserved for the translucent base). If your AMS is
physically loaded in a different order, either:

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

- Check the imported profile's `printable_area` matches your slicer's
  bed shape.
- Re-import the profile from a 3MF where the bed is configured
  correctly.

## "Some print setting from my profile isn't being honored"

See [Profile values look wrong](/troubleshooting/profile-fidelity/) —
walks through the override table and how to verify a specific key was
written.

## "Plugin crashes HueForge on startup"

Send us the plugin version + your HueForge version via
[contact](/contact/). Workaround: temporarily move the plugin out of
the plugins folder to confirm it's the plugin (not another extension
crashing), and we'll dig in.
