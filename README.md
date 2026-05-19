# glzr

Configuration for [GlazeWM](https://github.com/glzr-io/glazewm) and [Zebar](https://github.com/glzr-io/zebar) on Windows.

![Screenshot](/screenshots/screenshot_1.png)

![Screenshot](/screenshots/screenshot_2.png)

## Installation

```powershell
winget install glzr-io.GlazeWM
winget install glzr-io.Zebar
winget install AutoHotkey.AutoHotkey  # required by Zebar
```

## Setup

Copy `glazewm` and `zebar` folders into `%userprofile%\.glzr\`, overriding anything already there.

### Zebar

[Node.js](https://nodejs.org/) is required to build Zebar, if you don't have it, you can install it with:

```powershell 
winget install OpenJS.NodeJS
```
To build, open PowerShell and run the following commands:

```powershell
cd ~\.glzr\zebar\bar\bar
npm i
npm run build
```

## Usage

Start GlazeWM, Zebar will launch automatically.
