import { useMemo, useRef, useState } from "react";
import { soundTypes } from "../data/data";

export function useAudioHook() {
  // Combined Refs for all
  /**
   * useRef is not being monitored by react for changes
   * hence this is dafer way to deal with mutable objects like audio etc
   * This ensures to avoid re-renders everytime a user uses internal functions of Audio
   */
  const audioRefs = useRef(
    soundTypes.reduce((acc, sound) => {
      acc[sound.soundKey] = new Audio(sound.soundFile);
      return acc;
    }, {})
  );

  const [audioControls, setAudioControls] = useState(
    soundTypes.reduce((acc, sound) => {
      acc[sound.soundKey] = {
        isPlaying: false,
        volume: 1,
        muted: false,
      };
      return acc;
    }, {})
  );

  const soundData = useMemo(() =>
    soundTypes.map(
      (sound) => {
        return {
          ...sound,
          isPlaying: audioControls[sound.soundKey].isPlaying,
          volume: audioControls[sound.soundKey].volume,
          muted: audioControls[sound.soundKey].muted,
        };
      },
      [audioControls]
    )
  );

  const togglePlay = (soundKey) => {
    const played = audioControls[soundKey].isPlaying;
    if (played) {
      audioRefs.current[soundKey].pause();
    } else {
      audioRefs.current[soundKey].play();
      audioRefs.current[soundKey].loop = true;
    }
    setAudioControls((prev) => ({
      ...prev,
      [soundKey]: { ...prev[soundKey], isPlaying: !played },
    }));
  };

  const handleVolumne = (soundKey, volume) => {
    audioRefs.current[soundKey].volume = volume;
    setAudioControls((prev) => ({
      ...prev,
      [soundKey]: { ...prev[soundKey], volume: volume },
    }));
  };

  const handleMute = (soundKey) => {
    const mute = audioControls[soundKey].muted;
    audioRefs.current[soundKey].muted = !mute;
    setAudioControls((prev) => ({
      ...prev,
      [soundKey]: { ...prev[soundKey], muted: !mute },
    }));
  };

  return {
    soundTypes: soundTypes,
    soundData,
    togglePlay,
    handleVolumne,
    handleMute,
  };
}
