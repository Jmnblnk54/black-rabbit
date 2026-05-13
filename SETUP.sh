#!/bin/bash
# Run this script ONCE from inside the site/ directory on your Mac.
# It handles:
#   1. Cleaning any half-broken state the sandbox left behind
#   2. Initializing a fresh git repo
#   3. Installing dependencies
#   4. Verifying the build
#
# Then push to GitHub + connect to Vercel (instructions below).

set -e
cd "$(dirname "$0")"

echo "→ Cleaning any sandbox artifacts..."
rm -rf .git node_modules .next tsconfig.tsbuildinfo

echo "→ Initializing git..."
git init -b main
git add .
git commit -m "Initial scaffold of Black Rabbit Creative site

Next.js 15 (App Router) + TypeScript + Tailwind CSS, wedding-first
architecture per the v2.1 research and design plan. 53 source files,
27 routes, placeholder media awaiting Mux + Cloudinary integration."

echo "→ Installing dependencies (this takes a minute)..."
npm install

echo "→ Verifying the build..."
npm run build

echo ""
echo "✓ Setup complete."
echo ""
echo "Next steps:"
echo ""
echo "  1. Create a new GitHub repo (browser or gh CLI):"
echo "     gh repo create black-rabbit-creative --private --source=. --remote=origin --push"
echo ""
echo "     OR via browser:"
echo "       a. Go to https://github.com/new"
echo "       b. Name it 'black-rabbit-creative' (private)"
echo "       c. DO NOT initialize with a README"
echo "       d. Then run:"
echo "            git remote add origin git@github.com:YOUR_USERNAME/black-rabbit-creative.git"
echo "            git push -u origin main"
echo ""
echo "  2. Deploy to Vercel:"
echo "       a. Go to https://vercel.com/new"
echo "       b. Import the GitHub repo"
echo "       c. Framework preset: Next.js (auto-detected)"
echo "       d. Click Deploy — takes ~2 minutes"
echo ""
echo "  3. To run locally:"
echo "       npm run dev"
echo "       → http://localhost:3000"
