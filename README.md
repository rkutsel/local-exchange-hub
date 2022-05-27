### MIT License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Title

## Table of Contents

- [Description](#Description)

- [Installation Instructions](#Installation)

- [Usage with Examples](#Usage)

- [Features](#Features)

- [Credits](#Credits)

- [Contribute](#Contribute)

- [Tests](#Tests)

## Description

## Installation Instructions

## Usage with Examples

## Features

## Credits

## Contribute

## Tests


# UW Bootcamp Opinionated Dev Guide

## Opinionated guide that has these assumptions:

```markdown
- Your workstation is running on a Linux-based operating system, including Apple's Macbooks. 
- You use zsh or bash as your primary shell. Bonus point if you know their differences.
- You use VS Code as your main IDE.

Your VS Code has these extensions installed:

- Code Spell Checker
- Live Server
- open-in-browser
- Prettier Code Formatter
```

## Java Script naming convention and variable choices

### 01. Declaring Your Variables

```Java Script
//Always declare variables with const:
const myConstVar;
```

```Java Script
//If you realize that the value of the variable needs to change use let:
let myLetVar;
```

```
Use let when you know that the value of a variable will change.
Use const for every other variable.
Do not use var.
```

### 02. Naming Your Variables

```Java Script
//Use nouns to describe your variables and give them meaningful names:
const userInput = {};
let rawData = "";
```

### 03. Naming Your Functions

```Java Script
//Use verbs to describe your functions and give them meaningful names:
function captureUserInput() {return this}

function renderStorageContent() {return this}
```

## Git Workflow

It's almost always better to have multiple branches for development. At the most fundamental level there should be at least two branches:

1. `main` => production code base
2. `develop` => for a continuous, non-blocking development workflow

There can be more than those two but for the purpose of this guide two branches is more than enough to get a good start.

Things we don't want to do when working with `main` or `develop` branches:

1. Doing development work in `main` or `develop`
2. Merging your changes directly into `main` or `develop`
3. Having no protections of the `main`ranch

### General Dev Workflow

```bash
# feature_branch=(CREATE PR)=(REVIEW/TEST)=(MERGE)=>develop(CREATE PR)=(REVIEW/TEST)=(MERGE)=>main

#==DEVELOP BRANCH SETUP
# 01. create develop branch locally.
git branch -b develop
# 02. set upstream develop branch for the first time. It will set it up remotely.
git push --set-upstream origin develop

#==FEATURE BRANCH SETUP
# 01. create a feature branch locally.
git branch -b feature_branch_name
# 02. set upstream develop feature_branch_name for the first time. It will set it up remotely.
git push --set-upstream origin feature_branch_name
# 03a. merge develop into your feature branch
git merge develop
# 03b. rebase develop into your feature branch
git rebase develop


#==WORKING WITH EXISTING BRANCHES
# 01. checkout a remote branch i.e. existing develop branch
git checkout develop

# 02. pull changes from an existing branch
git checkout develop
git pull

# 03. submit a PR request from your feature branch
git add . #adds current dir
git commit -m "your commit message"
git push origin feature_branch_name
```

# References:

[JavaScript: Var, Let, or Const? Which One Should you Use?](https://codeburst.io/javascript-var-let-or-const-which-one-should-you-use-2fd521b050fa)

[GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

