---
title: Layer numbers differ from Describe.txt
description: Why the slicer shows filament changes at different layer numbers than the ones HueForge listed in Describe.txt — and why that's correct.
---

## Symptom

You open `Describe.txt` from your HueForge project. It lists color
changes at, say, layers **8, 16, 24, 32**. You open the exported 3MF
in your slicer and the filament changes show at layers **5, 9, 13, 17**.

Did something get lost?

## Short answer

No. **Describe.txt lists layer numbers without a Height Range Modifier
(HRM) applied. The 3MF Export Plugin adds an HRM automatically — it
prints the beginning of your HueForge model at a larger layer height
to speed up the base.** Your slicer's layer numbers shift compared to
Describe.txt as a result, but the filament changes still happen at the
right **Z heights**.

## What's happening under the hood

A HueForge model is conceptually:

1. A thick opaque **base** color at the bottom (your "first layer" stack).
2. A series of thin colored **detail layers** on top.

A naive slice would use one layer height for everything. That means
the base — which is just a flat slab and benefits nothing from fine
resolution — prints at the same 0.08 mm slow detail height as the
colors above it. Wasted time.

The plugin instead writes a `layer_config_ranges` block (Height Range
Modifier) into the 3MF that says:

> From Z=0 up to the top of the base, print at **firstLayerHeight**
> (e.g. 0.20 mm). Above that, print at **layerHeight** (e.g. 0.08 mm).

The slicer obeys: the base uses fewer, thicker layers; the color
stack above uses the thin detail layers. Total print time drops
significantly, surface quality on the visible top is unchanged.

## Why the layer numbers differ

Suppose your filament changes are at Z = 0.8 mm, 1.6 mm, 2.4 mm.

| Without HRM | With HRM (0.20 base, 0.08 detail) |
|---|---|
| 0.08 mm layers throughout | 0.20 mm base layers, then 0.08 mm |
| Z = 0.8 mm → layer 10 | Z = 0.8 mm → layer 4 (3 base + 1 detail) |
| Z = 1.6 mm → layer 20 | Z = 1.6 mm → layer 14 |
| Z = 2.4 mm → layer 30 | Z = 2.4 mm → layer 24 |

The **Z heights are identical**; the **layer indices differ** because
the base now takes fewer layers.

Describe.txt was generated before the HRM was applied, so it reflects
the without-HRM numbering. The 3MF reflects the with-HRM numbering.

## How to verify

In your slicer, hover over a filament-change line in the preview. The
slicer shows the **Z height** of that layer. Compare it to the **Z**
column in Describe.txt — they should match exactly.

## "Can I turn the HRM off?"

**Height Range Modifier** (HRM) is currently not a toggle in the export dialog.
