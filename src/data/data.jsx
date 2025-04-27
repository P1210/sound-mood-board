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

export const soundTypes = [
  {
    soundKey: "rain",
    label: "Rain pouring in backyard",
    soundFile: rain,
    backgroundImage: rain_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "fireplace",
    label: "Cozy Warm Fire place",
    soundFile: fireplace,
    backgroundImage: fireplace_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "ocean_waves",
    label: "Gentle Ocean Waves",
    soundFile: ocean_waves,
    backgroundImage: ocean_waves_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "beach",
    label: "Sandy beaches",
    soundFile: beach,
    backgroundImage: beach_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "wind",
    label: "Wind among leaves",
    soundFile: wind,
    backgroundImage: wind_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "night",
    label: "Night ambience",
    soundFile: night,
    backgroundImage: night_image,
    icon: "",
    musicAttribute: "",
  },
  {
    soundKey: "soft_piano",
    label: "Soft Lo-fi Music",
    soundFile: soft_piano,
    backgroundImage: soft_piano_image,
    icon: "",
    musicAttribute: "",
  },
];

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