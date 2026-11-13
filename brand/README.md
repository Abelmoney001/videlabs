# Videlabs brand assets

Icons and logos for use outside the site: app stores, social profiles, decks,
partner pages. Nothing in this folder is served by the site.

| Files | What it is | Sizes |
| --- | --- | --- |
| `png/videlabs-icon-{size}.png` | The eye tile, rounded corners, transparent background | 16, 32, 48, 64, 96, 128, 180, 192, 256, 512, 1024 |
| `png/videlabs-icon-opaque-{size}.png` | Same tile with the corners filled in night and no alpha channel, for stores that reject transparency | 180, 192, 512, 1024 |
| `png/videlabs-icon-padded-{size}.png` | Tile at 58% on a night square, no alpha. Survives circular crops (X, GitHub, Discord) and Android maskable icons | 192, 512, 1024 |
| `png/videlabs-glyph-{white,ink}-{size}.png` | The glyph from the pupil on its own, one colour, transparent background | 32, 64, 128, 256, 512, 1024 |
| `png/videlabs-wordmark-{white,ink}-{width}.png` | Wordmark only | 512, 1024, 2048 wide |
| `png/videlabs-lockup-horizontal-{white,ink}-{width}.png` | Tile and wordmark side by side, as in the navbar | 512, 1024, 2048 wide |
| `png/videlabs-lockup-stacked-{white,ink}-{width}.png` | Tile above wordmark, the original logo arrangement | 512, 1024 wide |
| `svg/videlabs-wordmark-{white,ink}.svg` | Wordmark as vector | any |
| `favicon/favicon.ico` | 16, 32 and 48 px in one file | |
| `master/videlabs-icon-master-3232.png` | Source for everything above | 3232 |

`white` is for dark surfaces, `ink` (`#01031a`) for light ones.

The tile and glyph exist only as raster artwork; there is no vector source.
The master is the 4000 px image that was embedded in the old
`public/images/logo.svg`, with its transparent margin trimmed. For anything
larger than 1024 px, scale down from the master rather than up from a PNG here.

## Other sizes

Edit the size lists in `generate.mjs`, then from the repo root:

```sh
node brand/generate.mjs
```

It rebuilds `png/`, `svg/` and `favicon/` from the master and from
`public/images/videlabs-wordmark.svg`.

## Colours

Night `#01031a` · Pupil `#000935` · Paper `#eef0ff`. The spectrum values are in
`app/globals.css`.
