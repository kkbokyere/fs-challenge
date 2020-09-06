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

**3. Run Application.**

Once the node modules have all been installed and npm has done it's thing, that's it. To open up a local development environment, run:

```
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
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Material UI](https://material-ui.com/)


# Architecture 

Everything about my approach, is forward thinking towards scaling this application.

## State Management vs UI
- The idea is to simply think about a high level separation of concern. If Redux was to become obsolete, or we decided to use a different state management library, the 'state' folder can simple be updated to accommodate this. And it can be come in small incremental pieces.
- The Views folder, can be thought of as just the UI and should not intentionally contain any state management logic.

## Ducks
- I wanted to create a certain level of separation of concern, without having to over engineer.
- The solution I decided to use was the [Ducks](https://github.com/erikras/ducks-modular-redux) concept, but in a more scalable way which essentially allowed me to bundle reducers, actions and action types.
- For the purpose of this simple test, I kept the Ducks modular approach simple as one feature has simple logic. But if the app was to get more complicated, I would consider the following [re-ducks approach](https://github.com/alexnm/re-ducks).

# Improvements / Retrospective Review

- Would have used Cypress for E2E testing
- 100% test coverage
- create a better Error handler - only catching one simple error scenario
- should allow update list if its the same city
- implement typescript to better type definitions
- Would have considered creating a proper [SMACSS](http://smacss.com/) architecture for base CSS styles such as layout. 
- better styling
