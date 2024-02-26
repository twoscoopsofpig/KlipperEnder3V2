#!/bin/bash

#pid_gnome=$(pgrep gnome-session)
#DBUS_SESSION_BUS_ADDRESS=$(grep -z DBUS_SESSION_BUS_ADDRESS /proc/${pid_gnome}/environ|cut -d= -f2-)
#export DBUS_SESSION_BUS_ADDRESS=${DBUS_SESSION_BUS_ADDRESS}

# Add all changes to the staging area
git add .

# Commit the changes with a message
commitdate="Committed $(date +%Y-%m-%d" "%H:%M:%S)"
git commit -m "$commitdate"

# Push the changes to the remote repository
git push origin master
