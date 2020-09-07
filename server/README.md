# FS App Backend Test

## Introduction

The full stack code for the FS App test lending app. Built in [GraphQL]()

## Requirements

- [Node](https://nodejs.org/en/).
- [npm](https://www.npmjs.com/package/npm).

## Getting Started

**1. Clone Git Repo.**

```
$ git clone https://github.com/kkbokyere/fs-challenge.git
```

**2. Install Dependencies.**

```
$ yarn install
```

**3. Run Application.**

```
$ yarn start
```

Once the server is up and running, navigate to [localhost:4000/graphql](http://localhost:4000/graphql).

## Deployment

No CI/CD pipeline at the moment.

# Tools Used
- [GraphQL]
- [Express]

# Improvements / Retrospective Review

- Used UUID to generate IDs
- split the server logic to completely separate file
- 
- Would have used Cypress for E2E testing
- 100% test coverage
- create a better Error handler - only catching one simple error scenario
- implement typescript to better type definitions
