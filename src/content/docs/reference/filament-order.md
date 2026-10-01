---
title: Filament Order
description: Choose which slicer slot each filament uses so the exported 3MF matches how your AMS, CFS, MMU or tool changer is loaded.
---

By default the plugin numbers your filaments in HueForge's order: the
first filament goes in slot 1, the second in slot 2, and so on. If
your AMS, CFS, ACE, MMU or tool changer is loaded in a different
order, use **Filament Order** to change it in the plugin instead of
moving spools or remapping slots in the slicer.

## Changing the order

1. Next to **Filament Order**, click **Edit…**. It's in the **Output**
   group of the Export 3MF dialog, and on the **3MF Export** tab of
   **File → Save Project As**.
2. The *Filament Order* window shows one spool per slot, drawn in the
   filament's color and numbered from 1 on the left. Hover over a
   spool to see its brand and name.
3. Drag a spool to a new position, or select it and use the **◀** and
   **▶** buttons to move it one slot at a time.
4. Click **OK** to keep the new order, or **Cancel** to leave it as it
   was.

**Edit…** is grayed out when the project has fewer than two
filaments.

## Going back to HueForge's order

Open the window again and click **Reset**, then **OK**. **Reset** is
only available while the order differs from HueForge's.

## How long the order is kept

The order is remembered for the rest of your HueForge session, in both
the Export 3MF dialog and the Save Project As tab, so you don't have
to set it again for every export.

It goes back to HueForge's order when:

- you add, remove, reorder or swap a filament in HueForge,
- you open a project with different filaments, or
- you restart HueForge.

## What changes in the 3MF

The colors still change at exactly the same heights — they just come
from the slots you chose. The plugin rewrites the filament list in the
new order, then updates every filament change, every pause, and the
filament the print starts with to match.

Pauses are worked out after the reorder, so on a printer with fewer
slots than filaments they still land where a reload is really needed.
See [When does the plugin add pauses vs filament
changes?](/faq/#when-does-the-plugin-add-pauses-vs-filament-changes)

:::note[FlatForge face-down prints]
When a FlatForge export includes the translucent cap layer, the cap's
filament always takes slot 1 and your filaments follow from slot 2 in
the order you chose. See [the FlatForge
reference](/reference/flatforge/#the-translucent-cap-layer-flatforge-face-down-print-only).
:::
