# Clone Repositories Script

This script clones all repositories from the GitHub user `MavuriAlekhya2005`, excluding the repository named `DocVerify`.

## Prerequisites

- GitHub CLI (`gh`) must be installed
- You must be authenticated with GitHub CLI (`gh auth login`)
- Git must be installed

## Usage

1. Make sure you're authenticated with GitHub CLI:
   ```bash
   gh auth login
   ```

2. Run the script:
   ```bash
   ./clone-repos.sh
   ```

## What it does

The script executes the following command:

```bash
gh repo list MavuriAlekhya2005 --limit 1000 --json name,sshUrl -q '.[] | select(.name!="DocVerify") | .sshUrl' | xargs -L1 git clone
```

This command:
1. Lists up to 1000 repositories from the user `MavuriAlekhya2005`
2. Retrieves repository names and SSH URLs in JSON format
3. Filters out the repository named `DocVerify`
4. Extracts only the SSH URLs
5. Clones each repository using `git clone`

## Notes

- The repositories will be cloned into the current directory
- Make sure you have SSH keys set up with GitHub for cloning via SSH
- The script will fail if a repository with the same name already exists in the current directory
