#!/bin/bash

# Directory to start from, defaults to current directory if not provided
BASE_DIR="${1:-.}"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed. Install it with 'sudo apt install ffmpeg' (Debian/Ubuntu)."
    exit 1
fi

# Find all .jpg files recursively
find "$BASE_DIR" -type f -iname "*.jpg" | while read -r file; do
    # Output filename (same as input but with .webp extension)
    out="${file%.*}.webp"

    echo "Processing: $file → $out"

    # Use ffmpeg to convert and resize
    ffmpeg -i "$file" \
        -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
        -q:v 85 -y "$out"
done

echo "Conversion complete."

