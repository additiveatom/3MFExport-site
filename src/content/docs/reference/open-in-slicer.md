---
title: Opening the 3MF in your slicer
description: How Open 3MF after export finds and launches the slicer you exported for, where it looks on Windows, macOS and Linux, and how to point it somewhere else.
---

With **Open 3MF after export** turned on, the plugin launches the
slicer you picked in the **Slicer** dropdown with the new `.3mf`
loaded. It doesn't matter which app your operating system links to
`.3mf` files — exporting for PrusaSlicer opens PrusaSlicer, exporting
for Bambu Studio opens Bambu Studio.

The checkbox is in the **Output** group of the Export 3MF dialog and
on the **3MF Export** tab of **File → Save Project As**.

:::note
Before 1.1.0, **Open 3MF after export** handed the file to your
operating system's default `.3mf` app. If you changed that default
just for the plugin, you can change it back — the plugin doesn't use
it any more.
:::

## How the plugin finds your slicer

It checks three places, in order:

1. **A location you saved** — one you picked earlier, as long as the
   slicer is still there.
2. **The standard install location** for that slicer on your
   operating system (see the table below). Version-numbered installs
   such as `PrusaSlicer-2.9.6` or `Creality Print 7.1` are found too.
3. **Ask you.** If neither finds it, a file picker titled *Locate
   &lt;slicer&gt; executable* (*Locate &lt;slicer&gt; application* on
   macOS) opens. Pick the slicer's program and the plugin saves it for
   every later export.

## Standard install locations

### Windows and macOS

| Slicer | Windows (`C:\Program Files\…`) | macOS (`/Applications/…`) |
|---|---|---|
| Bambu Studio | `Bambu Studio` | `BambuStudio.app` |
| Orca Slicer | `OrcaSlicer` | `OrcaSlicer.app` |
| PrusaSlicer | `Prusa3D\PrusaSlicer` or `PrusaSlicer-<version>` | `PrusaSlicer.app` or `Original Prusa Drivers/PrusaSlicer.app` |
| Snapmaker Orca | `Snapmaker_Orca` | `Snapmaker Orca.app` |
| Creality Print | `Creality\Creality Print <version>` | `Creality Print.app` |
| Anycubic Slicer Next | `AnycubicSlicerNext` | `AnycubicSlicerNext.app` |
| Elegoo Slicer | `ElegooSlicer` | `ElegooSlicer.app` |
| Flashforge Studio | `Flashforge\Flash Studio Desktop` | `Flash Studio Desktop.app` |
| QIDI Studio | `QIDIStudio` | `QIDIStudio.app` |
| QIDI Slicer | `QIDISlicer` | `QIDISlicer.app` |
| SuperSlicer | `SuperSlicer` | `SuperSlicer.app` |

### Linux

Linux installs vary too much to guess, so the plugin looks only for
**Flatpak** installs of these three slicers — system-wide first, then
your per-user Flatpak install:

| Slicer | Flatpak app ID |
|---|---|
| Bambu Studio | `com.bambulab.BambuStudio` |
| Orca Slicer | `com.orcaslicer.OrcaSlicer` |
| PrusaSlicer | `com.prusa3d.PrusaSlicer` |

For any other slicer, or an AppImage or distro-package install, the
plugin asks you to locate it the first time. Pick the AppImage file or
the slicer's program file.

## Changing or resetting the saved location

Click the **…** button next to the **Slicer** dropdown. The
*Configure &lt;slicer&gt; Executable* window shows the path the plugin
will use and where it came from:

| Source | Meaning |
|---|---|
| **Source: auto-detected default install path** | Found in the standard install location |
| **Source: user override** | A location you picked |
| **Source: none** | Not found — you'll be asked the first time you export |

- **Browse…** — pick a different install, for example a beta build or
  a slicer installed on another drive.
- **Reset to auto-detect** — forget the location you picked and go
  back to the standard install location. Only available when you've
  picked one.

## HugeForge tile exports

When HugeForge writes one multi-plate 3MF, it sends the tiles one at a
time. The plugin waits until the last tile is written — about 20
seconds after it arrives, to be sure no more are coming — and then
opens the slicer **once** with the finished file.

## When the slicer doesn't open

- **"Could not open in slicer — The &lt;slicer&gt; executable could not
  be located."** The slicer wasn't in its standard location and no
  location was picked (or the picker was canceled). Click **…** next to
  **Slicer**, then **Browse…** to pick it, or turn off **Open 3MF after
  export**.
- **"Failed to launch &lt;slicer&gt; at: …"** The plugin found a
  program at that path but couldn't start it. The `.3mf` was still
  exported — open it by hand. Then click **…** and check the path: if
  it isn't the slicer's own program, pick the right one with
  **Browse…**, or use **Reset to auto-detect**.
- **The wrong install opens** (for example a release build when you
  wanted a beta). Use **…** → **Browse…** to pick the one you want.
