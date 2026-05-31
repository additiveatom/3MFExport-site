---
title: Install the plugin
description: How to install the 3MF Export Plugin into HueForge.
---

Installing the plugin is one step: **drag the release archive onto a
running HueForge window**. HueForge handles unpacking the right binary
for your operating system and putting it in the correct folder.

## Install

1. Download the release archive from your purchase email — a `.zip`
   on Windows and macOS, a `.tgz` on Linux.
2. Open HueForge.
3. Drag the archive **onto the HueForge window**.
4. HueForge prompts to install the plugin — accept.
5. Restart HueForge when prompted.

That's it. The plugin is wired in.

## Verifying the install

After restart:

- The Plugins menu has an **Export 3MF** menu item now.
- HueForge's **File → Save Project As** dialog gains a **3MF Export**
  tab near the top.

If both are present, you're done — head to [Your first
export](/getting-started/first-export/).

If they aren't, see [Common issues → "Plugin doesn't appear in the
menu"](/troubleshooting/common/).

## Updating

Same flow: drag the new release archive onto HueForge. It replaces
the previous version.

Quit HueForge first on Windows (it holds the old plugin file open
while running). On macOS and Linux the in-flight install handles the
swap.

Your imported printer profiles live in HueForge's app data folder
under `PrinterConfigs/` and survive plugin updates.
