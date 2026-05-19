# glzr

Personal configuration for [GlazeWM](https://github.com/glzr-io/glazewm) and [Zebar](https://github.com/glzr-io/zebar) on Windows.

![Screenshot](/zebar/bar/resources/preview_image.png?raw=true)

## Setup

Install dependencies:

```powershell
winget install glzr-io.GlazeWM
winget install glzr-io.Zebar
winget install AutoHotkey.AutoHotkey
```
For Zebar, [AutoHotkey](https://www.autohotkey.com/) is required as a dependency.

Copy `glazewm` and `zebar` folders into `%userprofile%\.glzr\`, overriding anything already there.

GlazeWM is ready to use as-is.

Zebar requires to be built first, open PowerShell and run the following commands:

```powershell
cd ~\.glzr\zebar\bar\bar
pnpm i  # you can use npm or yarn if you prefer
pnpm run build
```

Once everything is set up, start GlazeWM, Zebar will automatically start as well.
