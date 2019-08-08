# SubKiosk
*Self-Order DEMO Kiosk using React Native and MobX*

### Requires
- Node v10.16.2
- Yarn v1.17.3

### Installation
```sh
$ yarn run init
```

### Starting simulator
`Starts builder + simulator, first time it'll take a while`
```sh
$ yarn run start
```

>If simulator fails to start with "Could not find simulator" error then `yarn run devices` and replace simulator in packages.json's `start` script with an existing one in your system.

### Running on device
- Open `SubKiosk/ios/SubKiosk.xcodeproj` in Xcode
- Go to project settings -> `General`
- Pick a valid `Team` under `Signing` for targets `SubKiosk` and `SubKioskTests`
- Connect iPad using cable and select device in Xcode once it's recognized
- Click the `Play` button

### Debugging (both simulator and device)
- Install `React Native Debugger`
- Enable `Remote JS Debugging` in the _Developer Menu_ (simulator ⌘+D, device shake)
