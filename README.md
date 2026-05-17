# glzr

Personal configuration for [GlazeWM](https://github.com/glzr-io/glazewm) and [Zebar](https://github.com/glzr-io/zebar) on Windows.

## Structure

```
glazewm/
  config.yaml       GlazeWM window manager config
zebar/
  bar/              Zebar widget package
    zpack.json      Zebar package manifest
    bar/            Widget source (SolidJS)
```

## GlazeWM

Copy `glazewm/config.yaml` to the GlazeWM config directory:

```powershell
copy glazewm\config.yaml %userprofile%\.glzr\glazewm\config.yaml
```

Reload the config from within GlazeWM with `alt+shift+r`, or restart GlazeWM.

## Zebar

See [zebar/bar/README.md](zebar/bar/README.md) for build and deploy instructions.
