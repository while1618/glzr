# bar

A top bar widget for [Zebar](https://github.com/glzr-io/zebar) built with SolidJS.

Displays: workspaces, window title, media controls, systray, input method, CPU, memory, network, volume, battery, and clock.

## Requirements

- [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io)
- [Zebar](https://github.com/glzr-io/zebar) installed on Windows
- [GlazeWM](https://github.com/glzr-io/glazewm) (required by several widgets)
- [AutoHotkey v2](https://www.autohotkey.com) (required for systray button scripts)

## Build

From the `bar/` directory:

```bash
pnpm install
pnpm run build
```

Output is written to `bar/dist/`.

## Deploy to Windows

Copy the built `dist/` folder to the Zebar package directory on the Windows host.

**From PowerShell:**

```powershell
xcopy /E /I /Y bar\dist\ %userprofile%\.glzr\zebar\bar\bar\dist\
```

**From WSL:**

```bash
cp -r bar/dist/ /mnt/c/Users/<username>/.glzr/zebar/bar/bar/dist/
```

Then open Zebar and load the `bar` widget, or restart Zebar if it is already running.

## Development

Watch mode rebuilds on every file change:

```bash
pnpm run dev
```

Re-deploy the `dist/` folder after each build to see changes in Zebar.

