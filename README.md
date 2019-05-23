# react-native-track-player-test

This sample React Native + react-native-track-player project is testing [issue #606](https://github.com/react-native-kit/react-native-track-player/issues/606).

These are the current log results:
```
bundle.js:9 Console was cleared
require.js:114 Require cycle: node_modules/react-native-track-player/lib/index.js -> node_modules/react-native-track-player/lib/ProgressComponent.js -> node_modules/react-native-track-player/lib/index.js
Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
metroRequire @ require.js:114
(anonymous) @ ProgressComponent.js:2
loadModuleImplementation @ require.js:330
guardedLoadModule @ require.js:205
metroRequire @ require.js:125
(anonymous) @ index.js:198
loadModuleImplementation @ require.js:330
guardedLoadModule @ require.js:205
metroRequire @ require.js:125
(anonymous) @ index.js:4
loadModuleImplementation @ require.js:330
guardedLoadModule @ require.js:205
metroRequire @ require.js:125
(anonymous) @ App.js:11
loadModuleImplementation @ require.js:330
guardedLoadModule @ require.js:205
metroRequire @ require.js:125
(anonymous) @ index.js:6
loadModuleImplementation @ require.js:330
guardedLoadModule @ require.js:197
metroRequire @ require.js:125
(anonymous) @ service.js:1
executeApplicationScript @ RNDebuggerWorker.js:1
e @ RNDebuggerWorker.js:1
infoLog.js:16 Running application "reactNativeTrackPlayerTest" with appParams: {"rootTag":31}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
/Applications/React Native Debugger.app/Contents/Resources/app.asar/node_modules/react-devtools-cor…:3 [React DevTools] Connected
index.js:19 playback-state Object {state: 6}
index.js:19 playback-state Object {state: 1}
index.js:19 playback-queue-ended Object {position: 0, track: null}
index.js:19 playback-state Object {state: 6}
index.js:19 playback-track-changed Object {nextTrack: "https://nhks-vh.akamaihd.net/i/news/easy/k10011923001000.mp4/master.m3u8", position: -0.001, track: null}
index.js:19 playback-error Object {message: "None of the available extractors (MatroskaExtracto…avExtractor, AmrExtractor) could read the stream.", code: "playback-source"}
index.js:19 playback-state Object {state: 0}
index.js:19 playback-state Object {state: 6}
index.js:19 playback-error Object {message: "None of the available extractors (MatroskaExtracto…avExtractor, AmrExtractor) could read the stream.", code: "playback-source"}
index.js:19 playback-state Object {state: 0}
```
