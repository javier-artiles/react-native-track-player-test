/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from "react-native-track-player";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service.js'));
const trackPlayerEvents = [
    'playback-state',
    'playback-track-changed',
    'playback-queue-ended',
    'playback-error'
];
trackPlayerEvents.forEach(eventId => {
    TrackPlayer.addEventListener(eventId, (data) => console.log(eventId, data));
});
