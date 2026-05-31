---
title: Profile values look wrong
description: How to tell whether the plugin overrode a print-profile value or whether it's a slicer-side mistake — and what to do about it.
---

## Symptom

You imported a printer profile that worked fine when you sliced
directly in the slicer. After exporting via the plugin, one or more
print settings look different — wrong infill, wrong wall count, wrong
speed, etc.

## Step 1 — figure out which side changed it

Two possibilities:

1. **The plugin overrode the value on export.** The plugin has to
   override a small set of fields to produce a working HueForge stack.
2. **The slicer overrode the value on load.** The slicer may be
   "correcting" the embedded value back to a built-in default,
   especially if the profile name matches one of the slicer's own
   presets.

## What the plugin always overrides

These fields are always rewritten — they have to be, for HueForge
output to make sense:

| Field | Why |
|---|---|
| `layer_height` | Detail layer height set by HueForge model |
| `initial_layer_print_height` | Base layer height (HRM lower bound) |
| `filament_colour` | Comes from HueForge swatches (Bambu/Orca schema spelling) |
| `filament_ids` / `filament_settings_id` | Wired to the resolved filaments |
| `custom_gcode_per_layer` | Filament-change / pause G-code per color transition |
| `layer_config_ranges` | The Height Range Modifier — see [the layer-shift page](/troubleshooting/describe-txt-layer-shift/) |
| `different_settings_to_system` | Slicer's "what's been customized" list |
| Plate / bed positioning | Mesh placement on the bed |

Everything else (wall count, infill, speeds, retract, brim, etc.) is
preserved from your imported profile.

## What the slicer commonly overrides on load

- **Filament type, temperatures** — if you picked a slot from the
  slicer's filament library after loading the 3MF, the library wins.
