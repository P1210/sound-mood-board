import fireplace from "../assets/sounds/fireplace-with-crackling-sounds-2-min-rk-178392.mp3";
import rain from "../assets/sounds/rainy-day-in-town-with-birds-singing-194011.mp3";
import ocean_waves from "../assets/sounds/gentle-ocean-waves-birdsong-and-gull-7109.mp3";
import beach from "../assets/sounds/sandy-beach-calm-waves-water-nature-sounds-8052.mp3";
import wind from "../assets/sounds/wind-in-trees-117477.mp3";
import night from "../assets/sounds/night-ambience-17064.mp3";
import soft_piano from "../assets/sounds/soft-piano-100-bpm-121529.mp3";

import fireplace_image from "../assets/backgrounds/fireplace.jpg";
import rain_image from "../assets/backgrounds/rain.jpg";
import ocean_waves_image from "../assets/backgrounds/waves.jpg";
import beach_image from "../assets/backgrounds/beach.jpg";
import wind_image from "../assets/backgrounds/wind.jpg";
import night_image from "../assets/backgrounds/night.jpg";
import soft_piano_image from "../assets/backgrounds/soft-piano.jpg";

/** For our production deployment to reduce the data transfer cost,
 * we have hosted the assets to a CDN server
 * for local and testing development,
 * it is encouraged to use the static assets.
 * Fallback to static assets in case the CDN fails
 */

const local_env = import.meta.env.VITE_APP_ENVIRONMENT === "LOCAL";
const sounds =
  (typeof __SOUNDS__ !== "undefined" && JSON.parse(__SOUNDS__)) || {};
const images =
  (typeof __IMAGES__ !== "undefined" && JSON.parse(__IMAGES__)) || {};

const fallbackSounds = {
  rain,
  fireplace,
  ocean_waves,
  beach,
  wind,
  night,
  soft_piano,
};

const fallbackImages = {
  rain_image,
  fireplace_image,
  ocean_waves_image,
  beach_image,
  wind_image,
  night_image,
  soft_piano_image,
};

const soundMeta = [
  { key: "rain", label: "Rain pouring in backyard" },
  { key: "fireplace", label: "Cozy Warm Fire place" },
  { key: "ocean_waves", label: "Gentle Ocean Waves" },
  { key: "beach", label: "Sandy beaches" },
  { key: "wind", label: "Wind among leaves" },
  { key: "night", label: "Night ambience" },
  { key: "soft_piano", label: "Soft Lo-fi Music" },
];

export const soundTypes = soundMeta.map(({ key, label }) => ({
  soundKey: key,
  label,
  soundFile: local_env || !sounds[key] ? fallbackSounds[key] : sounds[key],
  backgroundImage:
    local_env || !images[`${key}_image`]
      ? fallbackImages[`${key}_image`]
      : images[`${key}_image`],
  icon: "",
  musicAttribute: "",
}));

export const focusTimerSettings = [
  {
    key: "focus_mode",
    defaultValue: 1500,
    name: "Pomodoro",
  },
  {
    key: "short_break",
    defaultValue: 300,
    name: "Short Break",
  },
  {
    key: "long_break",
    defaultValue: 900,
    name: "Long Break",
  },
];

export const soundPresets = [
  {
    key: "deep_focus_boost",
    name: "Deep Focus Boost",
    subName: "Boost concentration with calming sounds",
    sounds: [
      { key: "rain", volume: 0.6 },
      { key: "soft_piano", volume: 0.5 },
      { key: "wind", volume: 0.3 },
    ],
  },
  {
    key: "tropical_daydream",
    name: "Tropical Daydream",
    subName: "Spark creativity and lighten your mood",
    sounds: [
      { key: "beach", volume: 0.7 },
      { key: "ocean_waves", volume: 0.5 },
    ],
  },
  {
    key: "calm_evening_wind_down",
    name: "Calm Evening",
    subName: "Unwind and relax after a long day",
    sounds: [
      { key: "fireplace", volume: 0.6 },
      { key: "night", volume: 0.5 },
      { key: "soft_piano", volume: 0.3 },
    ],
  },
  {
    key: "meditation_retreat",
    name: "Meditation Retreat",
    subName: "Find inner peace and stillness",
    sounds: [
      { key: "ocean_waves", volume: 0.5 },
      { key: "wind", volume: 0.4 },
    ],
  },
  {
    key: "cozy_winter_study",
    name: "Cozy Winter Study",
    subName: "Create a warm, focused study space",
    sounds: [
      { key: "rain", volume: 0.5 },
      { key: "fireplace", volume: 0.6 },
      { key: "soft_piano", volume: 0.4 },
    ],
  },
  {
    key: "forest_therapy",
    name: "Forest Therapy",
    subName: "Reduce stress and feel grounded",
    sounds: [
      { key: "wind", volume: 0.7 },
      { key: "night", volume: 0.5 },
    ],
  },
  {
    key: "creative_spark",
    name: "Creative Spark",
    subName: "Fuel imagination and free thinking",
    sounds: [
      { key: "soft_piano", volume: 0.6 },
      { key: "beach", volume: 0.4 },
    ],
  },
  {
    key: "sleep_preparation_mode",
    name: "Sleep Prep Mode",
    subName: "Ease into deep, restful sleep",
    sounds: [
      { key: "night", volume: 0.6 },
      { key: "ocean_waves", volume: 0.5 },
    ],
  },
];
