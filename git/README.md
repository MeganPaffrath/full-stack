# Git

[The Book](https://git-scm.com/book/en/v2)

# Get Started

- Install
  - homebrew
- Set up configurations: local and global
- create repo: `git init`

# Commits

- Note:
  - write commit messages in present tense
- Status: `git status`
- Stage for commit: `git add <file>` || `git add .`
- Status: `git status`
- Commit: `git commit -m 'message here'`
- Push to github?
- Show commits: `git log`
- remove git repo through recursive force: `rm -rf .git` - this removes any representation of git for the project

# Fix / Amend Commit

- what if you distributed a bad change to your team?
  - fix mistake and create a new commit
- ONLY IF PURELY LOCAL
  - `git reset --hard <commit number>`
- Amend commit
  - `git commit --amend`
