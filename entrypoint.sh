#!/bin/sh

# Ensure dependencies are installed
echo "Installing dependencies..."
pnpm install
next build

# Start server
echo "Starting server..."
pnpm start
