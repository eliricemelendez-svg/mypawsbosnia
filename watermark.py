#!/usr/bin/env python3
"""
Watermark dog photos with their profile URL.
Usage: python3 watermark.py [dog-slug]
  - No args: watermarks ALL dogs
  - With arg: watermarks one dog (e.g. python3 watermark.py freya)

Output goes to ~/Desktop/watermarked/[slug]/
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

SITE = "mypawsbosnia.org"
DOGS_DIR = Path("src/assets/current-dogs")
OUTPUT_BASE = Path.home() / "Desktop" / "watermarked"


def get_font(size):
    """Try to find a good bold font, fall back to default."""
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except Exception:
                continue
    return ImageFont.load_default()


def watermark_image(input_path, output_path, slug):
    """Add URL watermark bar to bottom of image."""
    img = Image.open(input_path).convert("RGB")
    w, h = img.size

    # Scale font to image width — URL should be readable but not huge
    font_size = max(int(w * 0.035), 16)
    font = get_font(font_size)
    bar_height = int(font_size * 2.2)

    url_text = f"{SITE}/adopt/{slug}"

    # Create a semi-transparent bar at the bottom
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw_overlay = ImageDraw.Draw(overlay)

    # Dark semi-transparent bar
    bar_y = h - bar_height
    draw_overlay.rectangle([(0, bar_y), (w, h)], fill=(0, 0, 0, 160))

    # Convert original to RGBA, paste overlay
    img_rgba = img.convert("RGBA")
    img_rgba = Image.alpha_composite(img_rgba, overlay)

    # Draw text on final image
    draw = ImageDraw.Draw(img_rgba)
    bbox = draw.textbbox((0, 0), url_text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    text_x = (w - text_w) // 2
    text_y = bar_y + (bar_height - text_h) // 2

    draw.text((text_x, text_y), url_text, fill=(255, 255, 255, 240), font=font)

    # Save as RGB JPEG
    final = img_rgba.convert("RGB")
    final.save(output_path, "JPEG", quality=92)


def process_dog(slug):
    """Watermark all photos for a single dog."""
    dog_dir = DOGS_DIR / slug
    if not dog_dir.exists():
        print(f"  No photos found for {slug}")
        return 0

    output_dir = OUTPUT_BASE / slug
    output_dir.mkdir(parents=True, exist_ok=True)

    count = 0
    for photo in sorted(dog_dir.iterdir()):
        if photo.suffix.lower() in (".jpg", ".jpeg", ".png"):
            out_path = output_dir / f"{photo.stem}_wm.jpg"
            watermark_image(photo, out_path, slug)
            count += 1

    return count


def main():
    if len(sys.argv) > 1:
        slugs = sys.argv[1:]
    else:
        # All dogs
        slugs = sorted(d.name for d in DOGS_DIR.iterdir() if d.is_dir())

    OUTPUT_BASE.mkdir(parents=True, exist_ok=True)
    total = 0

    for slug in slugs:
        count = process_dog(slug)
        if count:
            print(f"  {slug}: {count} photos watermarked")
            total += count

    print(f"\nDone! {total} photos saved to {OUTPUT_BASE}")


if __name__ == "__main__":
    main()
