#!/bin/bash

# Deployment script for Hugging Face Spaces
# This script builds the project and prepares it for deployment

echo "🚀 Building portfolio for Hugging Face Spaces deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Verify dist folder exists and has content
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
    echo "✅ Build successful! dist/ folder contains:"
    ls -la dist/
    echo ""
    echo "🎯 Ready for deployment to Hugging Face Spaces!"
    echo "📁 The Space will serve files from the dist/ folder"
else
    echo "❌ Build failed! dist/ folder is empty or doesn't exist"
    exit 1
fi

echo ""
echo "📋 Next steps:"
echo "1. Commit and push changes to Hugging Face Spaces"
echo "2. The Space will automatically serve from dist/ folder"
echo "3. Your portfolio will be live at: https://huggingface.co/spaces/Muhusin/Muhusin_Portfolio"
