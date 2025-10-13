#!/bin/bash

# Exit on any error
set -e

# Check if sitemap.xml exists
SITEMAP="sitemap.xml"
if [ ! -f "$SITEMAP" ]; then
  echo "❌ sitemap.xml not found in current directory."
  exit 1
fi

# Extract service slugs
echo "🔍 Extracting service slugs from sitemap..."
SLUGS=$(grep -oP '(?<=<loc>).*?/services/[^<]+' "$SITEMAP" | sed 's|.*/services/||')

# Check if any slugs found
if [ -z "$SLUGS" ]; then
  echo "⚠️  No service URLs found in sitemap."
  exit 0
fi

# Create JSON files for each slug
for slug in $SLUGS; do
  FILE="${slug}.json"
  if [ -f "$FILE" ]; then
    echo "⏭️  Skipping $FILE (already exists)"
  else
    echo "📝 Creating $FILE"
    cat <<EOF > "$FILE"
{
  "slug": "$slug",
  "title": "$(echo "$slug" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++){$i=toupper(substr($i,1,1)) substr($i,2)}; print}')",
  "content": [],
  "images": []
}
EOF
  fi
done

echo "✅ Done! JSON files created for $(echo "$SLUGS" | wc -w) service pages."
