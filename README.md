# FS App Test

## Introduction

The full stack code for the FS App test lending app. Built in [React](https://reactjs.org/). The Details on the task can be found [here](README-TASK.md)

## Requirements

- [Node](https://nodejs.org/en/).
- [npm](https://www.npmjs.com/package/npm).

## Getting Started

**1. Clone Git Repo.**

```
$ git clone https://github.com/kkbokyere/fs-challenge.git
```

**2. Install Dependencies.**

Once that's all done, cd into the frontend-interview-challenge web directory and install the depedencies:

```
$ cd frontend-interview-challenge/web
$ yarn install
```

```
$ cd frontend-interview-challenge/server
$ yarn install
```

**3. Run Server.**

```
$ cd frontend-interview-challenge/server
$ yarn start
```

**4. Run Application.**

Once the node modules have all been installed and npm has done it's thing, that's it. To open up a local development environment, run:

```
$ cd frontend-interview-challenge/web
$ yarn start
```

Once the server is up and running, navigate to [localhost:3000](http://localhost:3000).

## Testing

[Jest](https://jestjs.io/) is the test runner used, with [React Testing Library](https://testing-library.com/docs/react-testing-library/) is testing library used for testing components. To run test use the following command:

```
$ yarn test
```

## Deployment

No CI/CD pipeline at the moment.

# Tools Used

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Redux](https://redux.js.org)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Material UI](https://material-ui.com/)


# Architecture 

Everything about my approach, is forward thinking towards scaling this application.

# Improvements / Retrospective Review

- Would have used Cypress for E2E testing
- 100% test coverage for the web
- 100% test coverage for the server
- create a better Error handler - only catching one simple error scenario
- implement typescript to better type definitions
- Would have considered creating a proper [SMACSS](http://smacss.com/) architecture for base CSS styles such as layout. 
- better styling
- would have used a proper auth flow such as JWT to truly validate users
