#!/bin/bash
echo "Starting build process..."
npm run build
echo "Build completed. Listing dist directory:"
ls -la dist
echo "Contents of dist/index.html:"
cat dist/index.html