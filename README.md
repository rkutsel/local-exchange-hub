### MIT License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# [Local Exchange Hub](https://local-exchange-hub.herokuapp.com/)

## Description
When the user navigates to the Local Exchange homepage, they are presented with a random assortment of items that have been posted by other users. In the navigation bar, they can search by city, Login, or Signup. 

When the user clicks the Login button, they are taken to a form where they can enter their credentials, login and access their profile. When they click on the Signup button, they are taken to a form where they enter their name, email, and password.
When the user starts to enter a city name, the search field auto-completes the text. When the Search button is clicked the user is presented with a listing of offers based on the city they searched.

When the user clicks on a listing card, they are taken to a detailed page of the offer that includes an image, description, map of the city, and a feature that allows for the user to post, edit, and delete their own comments and view other user’s comments.

When the user clicks on Profile they are presented with a listing of their own offers that they have posted, where they can delete an offer from the site and create new offers.
When the user click on the button to create a new offer, they are taken to a form where they enter relevant information about the item being offered, and these items become available on the homepage, search results page, and item details page.

## [Link To Deployed APP](https://local-exchange-hub.herokuapp.com/)

## Installation Instructions
>NOTE: Make sure you have Node.JS ~v16.14.2 and NPM ~8.11.0 installed. You can quickly check this by running node -v for Node.JS and npm -v for NPM in your terminal. Additionally this application requires mysql ~8.0.29

Clone Repo 
Once the above is confirmed, clone the repo git clone git@github.com:rkutsel/local-exchange-hub.git and initialize the database using MySQL. Access the MySQL shell in terminal and run the schema.sql file in the db directory.

Once the database is initialized, create a storage bucket for the firebase image and setup your credentials similar to this [guide](https://firebase.google.com/docs/web/setup).

Install local dependencies
Then install the dependencies by running npm i in your terminal. We recommend installing them locally. 

Seed data is also available if you need some initial data to get started quickly. To use this data, run: npm seed

NOTE: this is optional and should only be run if you need some initial data. 


## User Story
```Markdown

As a thrifty consumer that is conscious of waste and its impact on the environment,
I want to be able to search my local area and find used goods that I need
I also want to be able to post any of my own used goods that I would like to recycle rather than throw away.
```
**ADD SCREENSHOTS HERE**

## Features
The current state features include:
* Autocomplete on search bar
* User authentication
* Creating new offers, deleting existing offers
* Creating new comments, editing or deleting existing comments
* Map showing the location of an offer item
* Ability to limit search to city 
* User's can upload photos of their offer items when creating a new offer

## Credits
This project was a collaborative effort between Roman Kutsel, Jooree Ahn, Godfrey Bongomin, and Sophie Miller. 

## Contribute
To contribute, follow the installation instructions and open a branch with a descriptive name. Be sure to pull from the develop branch. Use your branch to add features or fix bugs, then submit a Pull Request into the develop branch with an explanation of the changes and any pertinent information. 

## Tests
There are currently no tests built into this application. 

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

## Feature Branch Naming Convention

Feature branches need to have a clear format that describes the owner and the inteded purpose. 
It should follow this format => `[owner]-[purpose]-[description]`. Bellow are a few examples. 

```bash
# All feature branches need to have a clear format that describes the intent of it.  
$ git checkout -b rkutsel_feature-add-auth-module # clearly explains who owns it and what is the purpose of it. 
$ git checkout -b rkutsel_wip-add-support-for-heroku # work in progress that won't be done soon. 
$ git checkout -b rkutsel_bug-fix-authentication-failure # work in progress that won't be done soon. 
$ git checkout -b rkutsel_info-auth-module-documentation # work in progress that won't be done soon. 
```

# References:

[JavaScript: Var, Let, or Const? Which One Should you Use?](https://codeburst.io/javascript-var-let-or-const-which-one-should-you-use-2fd521b050fa)

[GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

