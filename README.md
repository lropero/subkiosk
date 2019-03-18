# Subway Kiosk
*You had to have the big salad*

### Requires
- Node v10.15.3
- Yarn v1.15.2

### Installation
```sh
$ yarn
```

### Starting simulator
`Starts builder + simulator, first time it'll take a while`
```sh
$ yarn run start
```

### Starting builder
`Starts builder, when launching simulator from Xcode`
```sh
$ yarn run cli
```

### Pulling new code
```sh
$ git pull
$ yarn run init
```

### Linting
`Before pushing code, uses Standard.js`
```sh
$ yarn run lint
```

### Adding dependencies
`Make sure you commit package.json + yarn.lock files afterwards`
```sh
$ yarn add [--dev] <dependency>
$ yarn run nuke
```

### Upgrading dependencies
`I'd suggest doing this regularly during development and refactor any breaking changes (if upgrades, do 'yarn run nuke' and commit package.json + yarn.lock files)`
```sh
$ yarn run upgrade
```

### Running on device
- Open `SubKiosk/ios/SubKiosk.xcodeproj` in Xcode
- Go to project settings -> `General`
- Pick a valid `Team` under `Signing` for targets `SubKiosk` and `SubKioskTests`
- Connect iPad using cable and select device in Xcode once it's recognized
- Click the `Play` button

### Debugging (both simulator and device)
- Install `React Native Debugger`
- Enable `Remote JS Debugging` in the _Developer Menu_ (simulator ⌘+D, device shake)
