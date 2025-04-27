import { createContext, useCallback, useMemo, useRef, useState } from "react";
import { soundPresets, soundTypes } from "../data/data";

/** Why Context instead of custom hook?
 * Using context as the soundData state is not updating
 * from preset component in the carousel component.
 * This happens beacuse local state is freshly created per component level
 * So change in one component will not change its own copy of local state
 * not chnage the other copy present in the second component
 * unless that state is being passed as props, which is hassle so context is being used
 */
export const AudioContext = createContext();

export function useAudioHook() {
  /** Combined Refs for all
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

  const soundData = useMemo(() => {
    return soundTypes.map((sound) => ({
      ...sound,
      isPlaying: audioControls[sound.soundKey].isPlaying,
      volume: audioControls[sound.soundKey].volume,
      muted: audioControls[sound.soundKey].muted,
    }));
  }, [audioControls]);

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

  const [selectedPreset, setSelectedPreset] = useState(null);

  const handleSelectPreset = useCallback((key) => {
    setSelectedPreset(key);
    const preset = soundPresets.find((p) => p.key === key);
    const presetSounds = preset?.sounds || [];
    soundTypes.forEach((sound) => {
      const soundKey = sound.soundKey;
      const found = presetSounds.find((s) => s.key === soundKey);

      if (found) {
        audioRefs.current[soundKey].play();
        audioRefs.current[soundKey].loop = true;
        audioRefs.current[soundKey].volume = found.volume;
      } else {
        audioRefs.current[soundKey].pause();
        audioRefs.current[soundKey].volume = 1;
      }

      setAudioControls((prev) => ({
        ...prev,
        [soundKey]: {
          ...prev[soundKey],
          volume: found ? found.volume : 1,
          isPlaying: !!found,
        },
      }));
    });
  }, []);

  return {
    soundTypes: soundTypes,
    soundData,
    togglePlay,
    handleVolumne,
    handleMute,
    soundPresets: soundPresets,
    handleSelectPreset,
    selectedPreset,
    setSelectedPreset,
  };
}
