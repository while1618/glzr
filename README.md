# glzr

Personal configuration for [GlazeWM](https://github.com/glzr-io/glazewm) and [Zebar](https://github.com/glzr-io/zebar) on Windows.

![Screenshot](/zebar/bar/resources/preview_image.png?raw=true)

## Setup

Copy both `glazewm` and `zebar` folders into `%userprofile%\.glzr\`, overriding anything already there.

GlazeWM is ready to use as-is.

For Zebar, build the widget first:

```powershell
cd zebar\bar\bar
pnpm i
pnpm run build
```

That's it.
