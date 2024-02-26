#!/bin/bash

# Add all changes to the staging area
git add .

# Commit the changes with a message
commitdate="Committed $(date +%Y-%m-%d" "%H:%M:%S)"
git commit -m "$commitdate"

# Push the changes to the remote repository
git push origin main
