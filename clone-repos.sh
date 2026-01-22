#!/bin/bash

# Script to clone all repositories from MavuriAlekhya2005 except DocVerify
# This script uses the GitHub CLI to list repositories and clone them using SSH URLs

# List repositories from MavuriAlekhya2005 user
# - Limit to 1000 repositories
# - Get name and sshUrl in JSON format
# - Filter out the DocVerify repository
# - Extract only the SSH URL
# - Clone each repository using git clone

gh repo list MavuriAlekhya2005 --limit 1000 --json name,sshUrl -q '.[] | select(.name!="DocVerify") | .sshUrl' | xargs -L1 git clone
