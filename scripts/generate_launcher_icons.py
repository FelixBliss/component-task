#!/usr/bin/env python3
"""Convert web/public/unnamed.jpg into Android launcher icon resources.

Regenerates every mipmap ic_launcher / ic_launcher_round / ic_launcher_foreground
PNG from the source JPEG (proper format conversion + resizing, not renaming).
The adaptive-icon foreground uses a center-cropped safe zone so the visible part
of the artwork matches the legacy launcher icons.
Splash screen and web assets are untouched.
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "web" / "public" / "unnamed.jpg"
RES = ROOT / "android" / "app" / "src" / "main" / "res"

# density -> legacy launcher icon size (48dp base)
LAUNCHER_SIZES = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}

# density -> adaptive-icon foreground canvas size (108dp base)
FOREGROUND_SIZES = {
    "mipmap-mdpi": 108,
    "mipmap-hdpi": 162,
    "mipmap-xhdpi": 216,
    "mipmap-xxhdpi": 324,
    "mipmap-xxxhdpi": 432,
}


def circle_mask(size: int) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    return mask


def main() -> None:
    src = Image.open(SRC).convert("RGBA")
    # normalize to a square working image first
    side = min(src.size)
    src = src.crop(((src.width - side) // 2, (src.height - side) // 2,
                    (src.width - side) // 2 + side, (src.height - side) // 2 + side))

    for folder, size in LAUNCHER_SIZES.items():
        d = RES / folder
        d.mkdir(parents=True, exist_ok=True)

        # square launcher icon
        src.resize((size, size), Image.LANCZOS).save(d / "ic_launcher.png", "PNG")

        # circular round launcher icon
        round_icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        round_icon.paste(src.resize((size, size), Image.LANCZOS), (0, 0),
                         circle_mask(size))
        round_icon.save(d / "ic_launcher_round.png", "PNG")

    for folder, canvas in FOREGROUND_SIZES.items():
        d = RES / folder
        d.mkdir(parents=True, exist_ok=True)
        # adaptive foreground: 108dp canvas, only inner ~66dp guaranteed visible.
        # scale artwork to ~1.5x the visible diameter, centered.
        art = int(canvas * 66.0 / 108.0 * 1.5)
        fg = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
        resized = src.resize((art, art), Image.LANCZOS)
        off = (canvas - art) // 2
        # clamp within canvas
        if art > canvas:
            crop = (art - canvas) // 2
            resized = resized.crop((crop, crop, crop + canvas, crop + canvas))
            off = 0
        fg.paste(resized, (off, off), resized)
        fg.save(d / "ic_launcher_foreground.png", "PNG")

    print("Launcher icons regenerated from", SRC)


if __name__ == "__main__":
    main()
