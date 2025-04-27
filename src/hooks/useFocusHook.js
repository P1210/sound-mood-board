import { useCallback, useMemo, useRef, useState } from "react";
import { focusTimerSettings } from "../data/data";
import alarmSound from "../assets/sounds/clock-alarm-8761.mp3";

export function useFocusHook() {
  const defaultTimer = focusTimerSettings[0];
  const [timerType, setTimerType] = useState(defaultTimer.key);
  const [timerValue, setTimerValue] = useState(defaultTimer.defaultValue);
  const [isTimerActive, setTimerActive] = useState(false);
  const [sessions, setSessions] = useState(0);

  const handleResetTimer = () => {
    setTimerActive(false);
    setTimerValue(
      focusTimerSettings.find((s) => s.key === timerType).defaultValue
    );
  };

  const handleStartTimer = useCallback(() => {
    setTimerActive(true);
  }, []);

  const handlePauseTimer = useCallback(() => {
    setTimerActive(false);
  }, []);

  const handleTimerComplete = useCallback(() => {
    setTimerActive(false);
    const audio = new Audio(alarmSound);
    audio.play();
    audio.loop = false;
    const currentSetting = focusTimerSettings.find((s) => s.key === timerType);
    if (currentSetting) {
      setTimerValue(currentSetting.defaultValue);
    }
  }, [timerType]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    focusTimerSettings: focusTimerSettings,
    timerType,
    setTimerType,
    timerValue,
    setTimerValue,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
    isTimerActive,
    setTimerActive,
    formatTime,
    sessions,
    setSessions,
    handleTimerComplete,
  };
}
