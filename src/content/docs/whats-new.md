---
title: What's new in 1.1.0
description: Everything new in version 1.1.0 of the 3MF Export Plugin — opening the 3MF in the slicer you picked, choosing the Filament Order, centering on offset beds — plus the 1.0.8 and 1.0.9 updates before it.
---

Version **1.1.0** is the current release. To update, drag the new
release archive onto HueForge — see
[Updating](/getting-started/install/#updating). Your imported printer
profiles and saved settings carry over.

## New in 1.1.0

### Opens in the slicer you exported for

**Open 3MF after export** now launches the slicer you picked in the
dialog, with the new `.3mf` loaded — not whichever app your operating
system links to `.3mf` files. You no longer need to change your OS's
default `.3mf` app to make it open in the right slicer.

The plugin finds standard installs on Windows and macOS, and Flatpak
installs of Bambu Studio, Orca Slicer and PrusaSlicer on Linux. If it
can't find your slicer, it asks you to locate it once and remembers.
A new **…** button next to the **Slicer** dropdown lets you change or
reset that location.

[How the plugin finds your slicer →](/reference/open-in-slicer/)

### Choose which slot each filament uses

A new **Filament Order** row with an **Edit…** button lets you arrange
your spools to match how your AMS, CFS or tool changer is loaded.
Filament changes and pauses follow the new order. The order is kept
while you keep working on the same filaments, and **Reset** puts it
back to HueForge's order.

[Using Filament Order →](/reference/filament-order/)

### Models centered on offset beds

Some printers put the bed origin at the center of the bed instead of
a corner — the **Flashforge Adventurer 5M, 5M Pro and A5** among them.
Exports for those printers used to land in the back-right corner of
the bed. They're now centered. The Snapmaker U1 is now exactly
centered too, and imported PrusaSlicer, SuperSlicer and QIDI Slicer
profiles with an off-zero bed origin are handled the same way.

### Fixes and smaller changes

- **The bed-fit warning follows Rotate HueForge 90 Degrees.** Turning
  rotation on or off re-checks the fit right away, so a project that
  only fits sideways no longer shows a stale *larger than the printer
  bed* warning.
- **HugeForge tile exports open the slicer once,** after the last tile
  is written, instead of opening one slicer window per tile.
- **Project names are made safe for file names.** Characters Windows
  doesn't allow in file names (`< > : " / \ | ? *`) become `_`, and
  stray leading or trailing spaces are removed. See
  [Your first export](/getting-started/first-export/#5-set-the-output-options).
- **Flashforge Studio 1.7 is found automatically on Windows,** and
  error messages name slicers the way the dropdown does
  (*Flashforge Studio*, not *OrcaFlashforge*).
- **Save Project As no longer hangs** after you locate your slicer for
  **Open 3MF after export**.
- **The Export 3MF dialog opens faster** — the bundled printer
  profiles are read once per HueForge session instead of every time.

## Earlier updates: 1.0.8 and 1.0.9

These shipped after 1.0.7 and are all included in 1.1.0.

### Rotate HueForge 90 Degrees

A new checkbox in the Export 3MF dialog and the Save Project As panel
rotates the exported model 90° clockwise (looking down at the bed).
The thumbnail and the 3MF both show the rotation; your HueForge
project isn't changed. The setting is remembered between sessions.

### Orca Flashforge is now Flashforge Studio

The slicer was renamed to match Flashforge's own product name.
Existing selections and imported profiles keep working. Five new
bundled profiles came with it — **Adventurer 5M, Adventurer 5M Pro,
Adventurer A5, Creator 5 and Creator 5 Pro** — and the AD5X profile
was updated.

### More bundled printer profiles

- **Orca Slicer:** the Bambu Lab lineup (A1, A1 mini, H2D, H2S, P1P,
  P1S, P2S, X1, X1 Carbon, X2D), Creality K1 Max and Creality Ender-3
  Pro.
- **PrusaSlicer:** MK3S, MK3.5 and MK3.5 MMU3, plus a second CORE One
  profile.

See the [full list](/getting-started/overview/#supported-slicers).

### Fewer pauses on printers with fewer slots than filaments

The plugin now keeps track of which filaments are loaded. Switching
back to a filament that's still loaded no longer adds a pause; a pause
is added only when the next filament isn't loaded and every slot is
already in use. See [When does the plugin add pauses vs filament
changes?](/faq/#when-does-the-plugin-add-pauses-vs-filament-changes)

### Purge volumes worked out from your colors

For Bambu Studio and its forks, the purge (flush) volume between each
pair of filaments is now calculated from the actual colors — more
purge when going to a lighter or more saturated color — the way Bambu
Studio's *Re-calculate purging volumes* does. Before, projects with
more filaments than the profile's purge table could end up with pairs
set to zero. Your profile's purge multiplier and extra load / unload
purge are still used, and PrusaSlicer-family slicers keep all of your
profile's purge settings.

### FlatForge and ColorDrop parts matched by filament ID

With HueForge 0.9.4.4 or later, each FlatForge and ColorDrop part is
matched to its filament by ID, which is more reliable than matching
filament names. With older HueForge versions the plugin still matches
by name.

### Clear errors when the 3MF can't be saved

If the output folder can't be created or written to, or the `.3mf`
can't be overwritten because your slicer has it open, the dialog now
tells you — **Cannot Create Output Folder**, **Cannot Write to Output
Folder**, **Cannot Overwrite File** or **Export Failed** — instead of
closing as if it had worked.

### Base layer heights your slicer accepts

The thicker base layers the plugin uses for the start of your print
(see [Layer numbers differ from
Describe.txt](/troubleshooting/describe-txt-layer-shift/)) now use a
layer height your slicer accepts — for example 0.20 mm instead of
0.1333 mm — so the slicer no longer rejects or rounds it.

### The same printer at several nozzle sizes

You can now keep more than one profile for the same printer at
different nozzle sizes — say, an imported 0.2 mm P1S next to the
bundled 0.4 mm one. Choose the size in **Nozzle Diameter** to see the
matching profiles. After an import, **Nozzle Diameter** and **Printer
Profile** switch to the profile you just imported.

### Better slicer detection when importing

Sliced 3MFs from Flashforge Studio, Anycubic Slicer Next and Snapmaker
Orca are now recognized as those slicers on import, instead of being
taken for Orca Slicer.

### Bundled profiles share the same HueForge tuning

Every bundled profile now uses the same infill and top/bottom surface
patterns and a 0.24 mm first layer, so a model prints the same way
whichever printer you export for. PrusaSlicer
exports also stopped borrowing filament settings from unrelated
filament presets, so PrusaSlicer flags fewer filament settings as
modified when it opens the file.

### Save Project As panel

- A notice at the top of the **3MF Export** tab explains why it's
  disabled when **Use STL Output** is selected, and 3MF output turns
  on by itself when you turn STL output off.
- A one-time tip shows how to make 3MF HueForge's **Default Output
  Format**, so **Save Project As** opens on the 3MF Export tab.
