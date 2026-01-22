#!/bin/bash

# Enable strict error handling
set -euo pipefail

# Script to clone all repositories from MavuriAlekhya2005 except DocVerify
# This script uses the GitHub CLI to list repositories and clone them using SSH URLs

# Check prerequisites
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed or not in PATH"
    echo "Please install it from https://cli.github.com/"
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "Error: git is not installed or not in PATH"
    exit 1
fi

# Check if authenticated with GitHub CLI
if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated with GitHub CLI"
    echo "Please run: gh auth login"
    exit 1
fi

# List repositories from MavuriAlekhya2005 user
# - Limit to 1000 repositories
# - Get name and sshUrl in JSON format
# - Filter out the DocVerify repository
# - Extract only the SSH URL
# - Clone each repository using git clone
gh repo list MavuriAlekhya2005 --limit 1000 --json name,sshUrl -q '.[] | select(.name!="DocVerify") | .sshUrl' | xargs -r -L1 git clone
