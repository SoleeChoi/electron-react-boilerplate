# electron-react-boilerplate(with redux-saga)

[ ![alt text](https://img.shields.io/badge/redux--saga-v0.16.2-orange.svg?longCache=true&style=flat-square) ](https://github.com/redux-saga/redux-saga)
[ ![alt text](https://img.shields.io/badge/reselect-v4.0.0-yellow.svg?longCache=true&style=flat-square) ](https://github.com/reduxjs/reselect)
[ ![alt text](https://img.shields.io/badge/redux--immutable-v4.0.0-yellowgreen.svg?longCache=true&style=flat-square) ](https://github.com/gajus/redux-immutable)
[ ![alt text](https://img.shields.io/badge/immutable-v4.0.0--rc.12-green.svg?longCache=true&style=flat-square) ](https://github.com/facebook/immutable-js)
[ ![alt text](https://img.shields.io/badge/lodash-v4.17.11-brightgreen.svg?longCache=true&style=flat-square) ](https://github.com/lodash/lodash)
[ ![alt text](https://img.shields.io/badge/invariant-v2.2.4-blue.svg?longCache=true&style=flat-square) ](https://github.com/zertosh/invariant)
[ ![alt text](https://img.shields.io/badge/hoist--non--react--statics-v3.1.0-lightgrey.svg?longCache=true&style=flat-square) ](https://github.com/mridgway/hoist-non-react-statics)
[ ![alt text](https://img.shields.io/badge/prop--types-v15.6.2-333333.svg?longCache=true&style=flat-square) ](https://github.com/facebook/prop-types)

This module is `electron-react-boilerplate` with [redux-saga](https://github.com/redux-saga/redux-saga), not redux-thunk. All codes related to redux-saga is based on [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate). So every process like install, runn, packaging is all same as [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

## Install

First, clone the repo via git:

```bash
git clone --depth 1 https://github.com/SoleeChoi/electron-react-boilerplate.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package --[option]
```

To run End-to-End Test

```bash
$ yarn build-e2e
$ yarn test-e2e

# Running e2e tests in a minimized window
$ START_MINIMIZED=true yarn build-e2e
$ yarn test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## Keep your project updated with the boilerplate

If your application is a fork from this repo, you can add this repo to another git remote:

```sh
git remote add upstream https://github.com/electron-react-boilerplate/electron-react-boilerplate.git
```

Then, use git to merge some latest commits:

```sh
git pull upstream master
```

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
