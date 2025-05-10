#!/bin/sh

# Ensure dependencies are installed
echo "Installing dependencies..."
pnpm install

# Start development server
echo "Starting dev server..."
pnpm dev
